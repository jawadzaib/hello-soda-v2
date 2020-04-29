import User from '../models/User';
import SDKManager from '../core/SDKManager';

class UserService {
  static async addUser(user: User) {
    SDKManager.apiAdapter.postData('/users/create', user);
  }

  static async getUsers() {
    const response = await SDKManager.apiAdapter.getData('/users');
    const users: User[] = [];
    if(response.status) {
      return response.data;
    }
    return users;
  }

  static async getUser(id: number) {
    const response = await SDKManager.apiAdapter.getData('/users/' + id);
    if(response.status) {
      return response.data as User;
    }
    return null;
  }

  static async removeUser(id: number) {
    console.log(id);
  }

  static async getSocialAccounts() {
    return null;
  }
}

export default UserService;
