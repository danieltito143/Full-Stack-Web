import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate = (models) => {
      const { UserBiodata, UserHistory } = models;

      User.hasMany(UserHistory, {
        foreignKey: 'user_id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
      User.hasOne(UserBiodata, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    };
  }

  User.init(
    {
      id: {
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      tableName: 'user',
    },
  );

  return User;
};
