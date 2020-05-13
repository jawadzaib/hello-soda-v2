import SDKManager from '../core/SDKManager';
import User from '../models/User';
import ServiceUser from '../models/ServiceUser';

class AuthService {
  static getToken() {
    return sessionStorage.getItem('SOCIAL_APP_TOKEN');
  }
  static setToken(token: string) {
    sessionStorage.setItem('SOCIAL_APP_TOKEN', token);
  }
  static async login(username: string, password: string) {
    try {
      const response = await SDKManager.dataProvider.login(username, password);
      if (response.token) {
        AuthService.setToken(response.token);
      }
      return response ? response.status : false;
    } catch (error) {
      throw error;
    }
  }
  static async logout() {
    try {
      const response = await SDKManager.dataProvider.logout();
      return response ? response.status : false;
    } catch (error) {
      throw error;
    }
  }
  static async register(user: User) {
    try {
      const response = await SDKManager.dataProvider.register(user);
      return response ? response.status : false;
    } catch (error) {
      throw error;
    }
  }

  static async getProfile() {
    try {
      const response = await SDKManager.dataProvider.getProfile();
      if (response && response.status) {
        return new ServiceUser(response);
      }
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
