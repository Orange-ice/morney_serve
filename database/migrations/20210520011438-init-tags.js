'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize
    await queryInterface.createTable('tags', {
      id: {type: INTEGER, primaryKey: true, autoIncrement: true},
      name: STRING,
      created_at: DATE,
      updated_at: DATE,
      user_id: INTEGER,
      type: INTEGER
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tags');
  }
};
