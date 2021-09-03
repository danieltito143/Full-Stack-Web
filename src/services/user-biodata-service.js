import { User, UserBiodata } from '../models';
import ERRORS from '../configs/errors';

class UserBiodataService {
  static getUserBiodata = async () => {
    const biodata = UserBiodata.findAll({
      attributes: {
        exclude: ['user_id', 'UserId'],
      },
      include: [
        {
          model: User,
          attributes: ['id', 'email'],
        },
      ],
    });

    return biodata;
  };

  static findWithCreateUserBiodata = async ({
    userId,
    name,
    gender,
    hobby,
    city,
  }) => {
    if (!userId || !name || !gender || !hobby || !city) {
      throw new Error(ERRORS.NOT_COMPLETE);
    }

    const newBiodata = await UserBiodata.findOrCreate({
      where: { user_id: userId },
      default: {
        name, gender, hobby, city,
      },
    });

    return newBiodata;
  };

  static updateUserBiodata = async (id, {
    name, gender, hobby, city,
  }) => {
    if (!name || !gender || !hobby || !city) {
      throw new Error(ERRORS.NOT_COMPLETE);
    }

    const biodata = await UserBiodata.update(
      {
        name,
        gender,
        hobby,
        city,
      },
      {
        where: { id },
      },
    );

    return biodata;
  };

  static deleteUserBiodata = async ({ id }) => {
    const biodata = await UserBiodata.findOne({
      where: {
        id,
      },
    });

    if (biodata === null) {
      throw new Error(ERRORS.NOT_FOUND);
    }

    return UserBiodata.destroy({ where: { id } });
  };
}

export default UserBiodataService;
