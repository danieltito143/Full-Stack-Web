import UserHistory from '../models/user-game-history';
import UserHistoryService from '../services/user-history-service';
import BaseController from './base-controller';

class UserHistoryController extends BaseController {
  static getUserHistory = async (req, res) => {
    try {
      const history = await UserHistoryService.getHistory();

      return res.status(200).json(history);
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };

  static createUserHistory = async (req, res) => {
    const { player_score, comp_score } = await req.body;

    try {
      UserHistory.create({
        player_score,
        comp_score,
      });

      return res.status(201).json({
        message: 'Created',
      });
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };

  static updateUserHistory = async (req, res) => {
    const { player_score, comp_score } = await req.body;
    const { id } = req.params;

    try {
      UserHistory.update(id, { player_score, comp_score });

      return res.status(200).json({
        message: 'Updated',
      });
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };

  static deleteUserHistory = async (req, res) => {
    const { id } = req.params;

    try {
      const history = await UserHistoryService.deleteUserHistory({ id });

      return res.status(200).json({ id: history.id, message: 'deleted' });
    } catch (err) {
      const error = this.getError(err);

      return res.status(error.code).json(error);
    }
  };
}
export default UserHistoryController;
