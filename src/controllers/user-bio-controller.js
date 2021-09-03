import UserBiodataService from '../services/user-biodata-service';
import BaseController from './base-controller';

class UserBiodataController extends BaseController {
  static getBiodata = async (req, res) => {
    try {
      const users = await UserBiodataService.getUserBiodata();

      return res.status(200).json(users);
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };

  static createBiodata = async (req, res) => {
    try {
      const { name, gender, hobby, city, userId } = req.body;

      const biodata = await UserBiodataService.createUserBiodata({
        userId,
        name,
        gender,
        hobby,
        city,
      });

      return res.status(201).json({
        id: biodata.id,
        message: 'Created',
      });
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };

  static update = async (req, res) => {
    const { name, gender, hobby, city } = req.body;
    const { id } = req.params;

    try {
      const biodata = await UserBiodataService.updateUserBiodata(id, {
        name,
        gender,
        hobby,
        city,
      });

      return res.status(200).json({
        id: biodata.id,
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
      const biodata = await UserBiodataService.deleteUserBiodata({ id });
      return res.status(200).json({
        id: biodata.id,
        message: 'deleted',
      });
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };
}
export default UserBiodataController;
