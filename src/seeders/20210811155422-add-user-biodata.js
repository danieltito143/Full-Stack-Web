module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('user_biodata', [
      {
        id: '0bfdbf48-49f3-4cc4-9416-38ae01c5386e',
        name: 'user1',
        gender: 'm',
        hobby: 'Diving',
        city: 'Bogor',
        user_id: '86bd507b-282a-4111-b41d-3b032795e809',
      },
      {
        id: '58fe2da7-08da-4d1a-80f0-5f0228da98cd',
        name: 'user2',
        gender: 'f',
        hobby: 'Sleeping',
        city: 'Yogyakarta',
        user_id: '884b88ca-ad1e-4175-9245-a89c6e540fd8',
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user_biodata', null, {});
  },
};
