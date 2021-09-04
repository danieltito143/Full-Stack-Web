import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class UserBiodata extends Model {
    static associate(models) {
      const { User } = models;

      UserBiodata.belongsTo(User, {
        foreignkey: 'user_id',
      });
    }
  }

  UserBiodata.init(
    {
      id: {
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      gender: {
        type: DataTypes.ENUM,
        values: ['m', 'f'],
      },
      hobby: DataTypes.STRING,
      city: DataTypes.STRING,
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: {
            tableName: 'user',
          },
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      tableName: 'user_biodata',
    },
  );

  return UserBiodata;
};
