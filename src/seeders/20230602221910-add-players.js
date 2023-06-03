'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id from "Users";`
    );
    const games = await queryInterface.sequelize.query(
      `SELECT id from "Games";`
    );

    const userRows = users[0];
    const gameRows = games[0];

    await queryInterface.bulkInsert('Players', [{
      gameId: gameRows[0].id,
      userId: userRows[0].id,
      name: 'Magdalena',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {});
  }
};
