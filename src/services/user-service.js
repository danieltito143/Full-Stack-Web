import { User } from '../models';
import ERRORS from '../configs/errors';
import { generateHash } from '../utils/encryption';

class UserService {
  static getUsers = () =>
    User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });

  static createUser = ({ username, email, password }) => {
    if (!email || !username || !password) {
      throw new Error(ERRORS.BAD_REQUEST);
    }

    return User.create({
      username,
      email,
      password: generateHash(password),
    });
  };

  static updateUser = async (id, { username, email, password }) => {
    const user = await User.findOne({
      where: { id },
    });

    if (!user) {
      throw new Error(ERRORS.NOT_FOUND);
    }

    return User.update(
      {
        username,
        email,
        ...(password && { password: generateHash(password) }),
      },
      {
        where: {
          id,
        },
      }
    );
  };

  static deleteUser = async ({ id }) => {
    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (user === null) {
      throw new Error(ERRORS.NOT_FOUND);
    }

    return User.destroy({ where: { id } });
  };
}

export default UserService;
