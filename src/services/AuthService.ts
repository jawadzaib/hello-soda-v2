import SDKManager from '../core/SDKManager';
import User from '../models/User';

class AuthService {
  static getToken() {
    return sessionStorage.getItem('SOCIAL_APP_TOKEN');
  }
  static setToken(token: string) {
    sessionStorage.setItem('SOCIAL_APP_TOKEN', token);
  }
  static async login(username: string, password: string) {
    const response = await SDKManager.dataProvider.login(username, password);
    return response ? response.status : false;
  }
  static async logout() {
    const response = await SDKManager.dataProvider.logout();
    return response ? response.status : false;
  }
  static async register(user: User) {
    const response = await SDKManager.dataProvider.register(user);
    return response ? response.status : false;
  }
}

export default AuthService;
