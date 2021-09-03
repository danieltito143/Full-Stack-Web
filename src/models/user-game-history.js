import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    static associate(models) {
      const { User } = models;

      UserHistory.belongsTo(User, {
        foreignkey: 'user_id',
      });
    }
  }

  UserHistory.init(
    {
      id: {
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      player_score: DataTypes.INTEGER,
      comp_score: DataTypes.INTEGER,
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: {
            tableName: 'user',
          },
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      tableName: 'user_history',
    }
  );

  return UserHistory;
};
