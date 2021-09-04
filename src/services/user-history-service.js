import { UserHistory } from '../models';
import ERRORS from '../configs/errors';

class UserHistoryService {
  static getHistory = () => UserHistory.findAll({
    attributes: {
      exclude: ['user_id', 'UserId'],
    },
  });

  static createHistory = async ({ result }) => {
    if (!result) {
      throw new Error(ERRORS.BAD_REQUEST);
    }

    const history = await UserHistory.create({ result });

    return history;
  };

  static deleteUserHistory = async ({ id }) => {
    const history = await UserHistory.findOne({
      where: {
        id,
      },
    });

    if (history === null) {
      throw new Error(ERRORS.NOT_FOUND);
    }
  };
}

export default UserHistoryService;
