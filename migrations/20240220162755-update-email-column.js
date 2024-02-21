'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('players', 'email', {
      type: Sequelize.STRING,
      allowNull: false // If email cannot be null
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('players', 'email', {
      type: Sequelize.DATEONLY
    });
  }
};
