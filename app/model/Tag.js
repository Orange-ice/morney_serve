module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize
  const Tag = app.model.define('Tag', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    created_at: DATE,
    updated_at: DATE,
    user_id: INTEGER,
    type: INTEGER // 1 (收入)/ 0（支出）
  })

  Tag.associate = function () {
    app.model.Tag.belongsTo(app.model.User, {foreignKey: 'user_id', targetKey: 'id'})
  }

  return Tag
}
