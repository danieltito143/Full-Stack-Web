const { generateHash } = require('../utils/encryption');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('user', [
      {
        id: '86bd507b-282a-4111-b41d-3b032795e809',
        username: 'john wick',
        email: 'user1@example.com',
        password: generateHash('1234'),
      },
      {
        id: '884b88ca-ad1e-4175-9245-a89c6e540fd8',
        username: 'Cajuput',
        email: 'user2@example.com',
        password: generateHash('5678'),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
