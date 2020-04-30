import User from '../models/User';
import SDKManager from '../core/SDKManager';

class UserService {
  static async addUser(user: User) {
    const response = await SDKManager.dataProvider.addUser(user);
    return (response) ? response.status : false;
  }

  static async getUsers() {
    const response = await SDKManager.dataProvider.getUsers();
    const users: User[] = [];
    if(response.status) {
      return response.data;
    }
    return users;
  }

  static async getUser(id: number) {
    const response = await SDKManager.dataProvider.getUser(id);
    if(response.status) {
      return response.data as User;
    }
    return null;
  }

  static async removeUser(id: number) {
    const response = await SDKManager.dataProvider.removeUser(id);
    return (response) ? response.status : false;
  }
}

export default UserService;
