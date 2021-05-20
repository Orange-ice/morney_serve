module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize
  const Record = app.model.define('Record', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    tag_id: INTEGER,
    type: INTEGER,
    amount: INTEGER,
    notes: STRING,
    user_id: INTEGER
  })

  Record.associate = function () {
    app.model.Tag.belongsTo(app.model.User, {foreignKey: 'user_id', targetKey: 'id'})
  }

  return Record
}
