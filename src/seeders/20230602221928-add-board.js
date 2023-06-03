'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const players = await queryInterface.sequelize.query(
      `SELECT id from "Players";`
    );
    const games = await queryInterface.sequelize.query(
      `SELECT id from "Games";`
    );

    const playerRows = players[0];
    const gameRows = games[0];

    await queryInterface.bulkInsert('Boards', [{
      playerId: playerRows[0].id,
      gameId: gameRows[0].id,
      misterious: 'Naruto Uzumaki',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Boards', null, {});
  }
};
