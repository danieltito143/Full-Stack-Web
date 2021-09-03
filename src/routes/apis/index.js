import express from 'express';
import UserController from '../../controllers/user-controller';
import { API_ROUTES } from '..';
import UserBiodataController from '../../controllers/user-bio-controller';
import UserHistoryController from '../../controllers/user-history-controller';

const router = express.Router();

router.get(API_ROUTES.ROOT, (req, res) => {
  res.send('Hello');
});

router.get(API_ROUTES.GET_USER, UserController.getUsers);
router.post(API_ROUTES.CREATE_USER, UserController.create);
router.put(API_ROUTES.USER_ID, UserController.update);
router.delete(API_ROUTES.USER_ID, UserController.delete);

router.get(API_ROUTES.GET_BIODATA, UserBiodataController.getBiodata);
router.post(API_ROUTES.CREATE_BIODATA, UserBiodataController.createBiodata);
router.put(API_ROUTES.BIODATA_ID, UserBiodataController.update);
router.delete(API_ROUTES.BIODATA_ID, UserBiodataController.delete);

router.get(API_ROUTES.GET_HISTORY, UserHistoryController.getUserHistory);
router.delete(API_ROUTES.HISTORY_ID, UserHistoryController.deleteUserHistory);

export default router;
