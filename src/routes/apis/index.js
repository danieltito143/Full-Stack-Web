import express from 'express';
import UserController from '../../controllers/user-controller';
import { API_ROUTES } from '..';
import Middleware from '../../middlewares';
import UserBiodataController from '../../controllers/user-bio-controller';
import UserHistoryController from '../../controllers/user-history-controller';

const router = express.Router();

router.get(API_ROUTES.ROOT, (req, res) => {
  res.send('Hello');
});

router.get(API_ROUTES.GET_USER, [Middleware.Auth], UserController.getUsers);
router.post(API_ROUTES.CREATE_USER, [Middleware.Auth], UserController.create);
router.put(API_ROUTES.USER_ID, [Middleware.Auth], UserController.update);
router.delete(API_ROUTES.USER_ID, [Middleware.Auth], UserController.delete);

router.get(
  API_ROUTES.GET_BIODATA,
  [Middleware.Auth],
  UserBiodataController.getBiodata
);
router.post(
  API_ROUTES.CREATE_BIODATA,
  [Middleware.Auth],
  UserBiodataController.createBiodata
);
router.put(
  API_ROUTES.BIODATA_ID,
  [Middleware.Auth],
  UserBiodataController.update
);
router.delete(
  API_ROUTES.BIODATA_ID,
  [Middleware.Auth],
  UserBiodataController.delete
);

router.get(
  API_ROUTES.GET_HISTORY,
  [Middleware.Auth],
  UserHistoryController.getUserHistory
);
router.delete(
  API_ROUTES.HISTORY_ID,
  [Middleware.Auth],
  UserHistoryController.deleteUserHistory
);

router.post(API_ROUTES.LOGIN, [Middleware.Guest], UserController.login);

export default router;
