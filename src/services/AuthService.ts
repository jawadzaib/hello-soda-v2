import SDKManager from '../core/SDKManager';
import User from '../models/User';
import ServiceUser from '../models/ServiceUser';

class AuthService {
  static getToken() {
    return localStorage.getItem('SOCIAL_APP_TOKEN');
  }
  static setToken(token: string) {
    localStorage.setItem('SOCIAL_APP_TOKEN', token);
  }
  static removeToken() {
    localStorage.removeItem('SOCIAL_APP_TOKEN');
  }
  static async login(username: string, password: string) {
    try {
      const response = await SDKManager.dataProvider.login(username, password);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async logout() {
    try {
      const response = await SDKManager.dataProvider.logout();
      AuthService.removeToken();
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async register(user: User) {
    try {
      const response = await SDKManager.dataProvider.register(user);
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async getProfile() {
    try {
      const response = await SDKManager.dataProvider.getProfile();
      return response.status ? new ServiceUser(response.data) : false;
    } catch (error) {
      throw error;
    }
  }

  static async updateProfile(user: any) {
    const userPayload: any = {
      firstName: user.firstName,
      lastName: user.lastName,
      birthdate: user.birthdate,
    };
    if (user.password) {
      userPayload.password = user.password;
    }
    try {
      const response = await SDKManager.dataProvider.updateProfile(userPayload);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
