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

  static getBioById = async (id) => {
    const biodata = await UserGameBiodata.findOne({
      where: { id },
    });

    if (!biodata) throw new Error(ERRORS.NOT_FOUND);

    return biodata;
  };

  static createUserBiodata = async ({ name, gender, hobby, city, userId }) => {
    if (!name || !city) {
      throw new Error(ERRORS.NOT_COMPLETED);
    }

    return UserBiodata.create({
      name,
      gender,
      hobby,
      city,
      user_id: userId,
    });
  };

  static updateUserBiodata = async (id, { name, gender, hobby, city }) => {
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
      }
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
