import UserService from '../services/user-service';
import BaseController from './base-controller';

class UserController extends BaseController {
  static getUsers = async (req, res) => {
    try {
      const users = await UserService.getUsers();

      return res.status(200).json(users);
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };

  static create = async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const user = await UserService.createUser({
        username,
        email,
        password,
      });

      return res.status(201).json({
        id: user.id,
        message: 'Created',
      });
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };

  static update = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const { id } = req.params;
      const user = await UserService.updateUser(id, {
        username,
        email,
        password,
      });

      return res.status(200).json({
        id: user.id,
        message: 'Updated',
      });
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserService.deleteUser({ id });

      return res.status(200).json({ id: user.id, message: 'deleted' });
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };

  static login = async (req, res) => {
    try {
      const { username, password } = req.body;

      const token = await UserService.loginUser({ username, password });

      return res.status(200).json({ token });
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };
}
export default UserController;
