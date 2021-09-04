import { User } from '../models';
import ERRORS from '../configs/errors';
import { compareHash, generateHash } from '../utils/encryption';
import Jwt from '../utils/jwt';

class UserService {
  static getUsers = () =>
    User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });

  static getUserByUsername = async (username) => {
    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      throw new Error(ERRORS.USERNAME_NOT_EXIST);
    }

    return user;
  };

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

  static loginUser = async ({ username, password }) => {
    const user = await this.getUserByUsername(username);

    if (!compareHash(password, user.password)) {
      throw new Error(ERRORS.PASSOWRD_NOT_MATCH);
    }

    return Jwt.sign({
      id: user.id,
    });
  };
}

export default UserService;
