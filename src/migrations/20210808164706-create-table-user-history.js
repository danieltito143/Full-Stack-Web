module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_history', {
      id: {
        unique: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      player_score: Sequelize.INTEGER,
      comp_score: Sequelize.INTEGER,
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: {
            tableName: 'user',
          },
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('user_history');
  },
};
