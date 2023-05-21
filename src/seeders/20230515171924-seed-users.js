module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      username:'magdalenanario',
      password:'magdalena123',
      mail:'magdalenanario@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username:'camilagonzalez',
      password:'camila123',
      mail:'camilagonzalez@uc.cl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
