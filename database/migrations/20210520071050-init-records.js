'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER, DATE } = Sequelize
    await queryInterface.createTable('records', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      tag_id: INTEGER,
      type: INTEGER,
      amount: INTEGER,
      created_at: DATE,
      updated_at: DATE,
      notes: STRING,
      user_id: INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('records');
  }
};
