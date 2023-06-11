'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Characters', 
      'image',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Characters', 'image');
  }
};
