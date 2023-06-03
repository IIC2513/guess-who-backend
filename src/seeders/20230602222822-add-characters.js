'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const boards = await queryInterface.sequelize.query(
      `SELECT id from "Boards";`
    );
    const boardRows = boards[0];

    await queryInterface.bulkInsert('Characters', [
      {
        boardId: boardRows[0].id,
        name: 'Naruto Uzumaki',
        gender: 'Male',
        hairColor: 'Yellow',
        glasses: false,
        beard: false,
        oculto: false,
        image: 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        boardId: boardRows[0].id,
        name: 'Sasuke Uchiha',
        gender: 'Male',
        hairColor: 'Black',
        glasses: false,
        beard: false,
        oculto: false,
        image: 'https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        boardId: boardRows[0].id,
        name: 'Sakura',
        gender: 'Female',
        hairColor: 'Pink',
        glasses: false,
        beard: false,
        oculto: false,
        image: 'https://static.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        boardId: boardRows[0].id,
        name: 'Homer Simpson',
        gender: 'Male',
        hairColor: 'None',
        glasses: false,
        beard: true,
        oculto: false,
        image: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        boardId: boardRows[0].id,
        name: 'Bart Simpson',
        gender: 'Male',
        hairColor: 'Yellow',
        glasses: false,
        beard: false,
        oculto: false,
        image: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        boardId: boardRows[0].id,
        name: 'Lisa Simpson',
        gender: 'Female',
        hairColor: 'Yellow',
        glasses: false,
        beard: false,
        oculto: false,
        image: 'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], 
  {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', null, {});
  }
};
