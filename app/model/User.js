const shajs = require('sha.js')
const hash = raw => shajs('sha256').update(raw).digest('hex')

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize

  const User = app.model.define('User', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING,
    password: {
      type: TEXT,
      set(value) {
        this.setDataValue('password', hash(value))
      }
    },
    avatar: STRING
  })

  User.associate = function () {
    app.model.User.hasMany(app.model.Tag, {foreignKey: 'id'})
  }

  return User
}
