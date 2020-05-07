import SDKManager from './core/SDKManager';
import User from './models/User';
import UserService from './services/UserService';
import SocialAppService from './services/SocialAppService';
import FacebookService from './services/social-accounts/FacebookService';
import AuthService from './services/AuthService';

export {
  AuthService as Auth,
  SDKManager,
  UserService as Users,
  SocialAppService as SocialApp,
  FacebookService as Facebook,
  User,
};
