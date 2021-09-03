module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('user_history', [
      {
        id: '4e8c3e82-1ae5-4fac-b7c4-e5a02e629e1e',
        player_score: '0',
        comp_score: '3',
        user_id: '86bd507b-282a-4111-b41d-3b032795e809',
      },
      {
        id: 'a124dea5-c426-49ab-83a4-dfafce1cc41f',
        player_score: '1',
        comp_score: '2',
        user_id: '884b88ca-ad1e-4175-9245-a89c6e540fd8',
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user_history', null, {});
  },
};
