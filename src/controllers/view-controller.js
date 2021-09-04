import UserService from '../services/user-service';

class ViewController {
  static getHomePageView = (req, res) => res.render('main/index', { title: 'index' });

  static getSignupview = (req, res) => res.render('main/sign-up', { title: 'sign-up' });

  static getLoginview = (req, res) => res.render('main/login', { title: 'login' });

  static getGameView = (req, res) => res.render('main/game', { title: 'game' });

  static getDashboardView = (req, res) => res.render('dashboard/index', { title: 'Dashboard' });

  static getUserTable = async (req, res) => {
    const users = await UserService.getUsers();
    res.render('dashboard/user-table', { title: 'User Table', users });
  };
}

export default ViewController;
