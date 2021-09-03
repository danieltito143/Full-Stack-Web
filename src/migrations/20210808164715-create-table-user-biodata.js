module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_biodata', {
      id: {
        unique: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: Sequelize.STRING,
      gender: {
        type: Sequelize.ENUM,
        values: ['m', 'f'],
      },
      hobby: Sequelize.STRING,
      city: Sequelize.STRING,
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: {
            tableName: 'user',
          },
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('user_biodata');
  },
};
