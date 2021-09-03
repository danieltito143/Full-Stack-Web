import express from 'express';
import { VIEW_ROUTES } from '..';
import ViewController from '../../controllers/view-controller';

const router = express.Router();

router.get(VIEW_ROUTES.ROOT, ViewController.getHomePageView);
router.get(VIEW_ROUTES.LOGIN, ViewController.getLoginview);
router.get(VIEW_ROUTES.CREATE_USER, ViewController.getSignupview);
router.get(VIEW_ROUTES.GAME, ViewController.getGameView);

router.get(VIEW_ROUTES.DASHBOARD, ViewController.getDashboardView);
router.get(VIEW_ROUTES.VIEW_USER, ViewController.getUserTable);

export default router;
