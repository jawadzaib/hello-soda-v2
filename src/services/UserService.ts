import User from '../models/User';
import SDKManager from '../core/SDKManager';
import ServiceUser from '../models/ServiceUser';

class UserService {
  static async addUser(user: ServiceUser) {
    const response = await SDKManager.dataProvider.addUser({
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      city: user.getCity(),
      zip: user.getZip(),
      phone: user.getPhone(),
      email: user.getEmail(),
    });
    return response ? response.status : false;
  }

  static async getUsers() {
    const response = await SDKManager.dataProvider.getUsers();
    const users: ServiceUser[] = [];
    if (response.status) {
      return response.data;
    }
    return users;
  }

  static async getUser(id: number) {
    const response = await SDKManager.dataProvider.getUser(id);
    if (response && response.status) {
      return new ServiceUser(response);
    }
    return null;
  }

  static async removeUser(id: number) {
    const response = await SDKManager.dataProvider.removeUser(id);
    return response ? response.status : false;
  }
}

export default UserService;
