import User from '../models/User';
import SDKManager from '../core/SDKManager';
import ServiceUser from '../models/ServiceUser';

class UserService {
  static async addUser(user: ServiceUser) {
    try {
      const response = await SDKManager.dataProvider.addUser({
        firstName: user.getFirstName(),
        lastName: user.getLastName(),
        city: user.getCity(),
        zip: user.getZip(),
        phone: user.getPhone(),
        email: user.getEmail(),
        password: user.getPassword()
      });
      return response;
    } catch(error) {
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

  static async getUser(id: number) {
    const response = await SDKManager.dataProvider.getUser(id);
    return (response) ? new ServiceUser(response) : false;
  }

  static async removeUser(id: number) {
    const response = await SDKManager.dataProvider.removeUser(id);
    return response ? response.status : false;
  }
}

export default UserService;
