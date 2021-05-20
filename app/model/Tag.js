module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize
  const Tag = app.model.define('Tag', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING,
    created_at: DATE,
    updated_at: DATE,
    user_id: INTEGER
  })

  return Tag
}
