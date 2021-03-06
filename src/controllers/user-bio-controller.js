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

  static getUserBioById = async (req, res) => {
    try {
      const { id } = req.params;

      const biodata = await BiodataService.getBioById(id);

      return res.status(200).json(biodata);
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error.message);
    }
  };

  static createBiodata = async (req, res) => {
    console.log(req.decoded);
    try {
      const { name, gender, hobby, city } = req.body;
      const { id: userId } = req.decoded;

      await UserBiodataService.createUserBiodata({
        name,
        gender,
        hobby,
        city,
        userId,
      });

      return res.status(201).json({
        message: 'Created',
      });
    } catch (err) {
      const error = this.getError(err);
      console.log(err);

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
