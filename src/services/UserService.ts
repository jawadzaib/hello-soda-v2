import User from '../models/User';
import SDKManager from '../core/SDKManager';
import ServiceUser from '../models/ServiceUser';

class UserService {
  static async addUser(user: any) {
    try {
      const response = await SDKManager.dataProvider.addUser({
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        zip: user.zip,
        phone: user.phone,
        email: user.email,
        password: user.password
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async getUsers() {
    const response = await SDKManager.dataProvider.getUsers();
    const users: ServiceUser[] = [];
    if (response.status) {
      return response.data;
    }
    return users;
  }

  static async getUser(id: string) {
    const response = await SDKManager.dataProvider.getUser(id);
    return response.status ? new ServiceUser(response.data) : false;
  }

  static async getUserByEmail(email: string) {
    const response = await SDKManager.dataProvider.getUserByEmail(email);
    return response.status ? new ServiceUser(response.data) : false;
  }

  static async removeUser(id: string) {
    const response = await SDKManager.dataProvider.removeUser(id);
    return response;
  }
}

export default UserService;
