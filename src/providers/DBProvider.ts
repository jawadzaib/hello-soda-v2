import User from '../models/User';
import IDataProvider from '../interfaces/IDataProvider';

class DBProvider implements IDataProvider {
  constructor() {
    // get instance of mongoDB Client
    // connect using mongoDB Client instance
  }
  addUser(user: User) {
    throw new Error('Method not implemented.');
  }

  getUsers() {
    throw new Error('Method not implemented.');
  }

  getUser(id: number) {
    throw new Error('Method not implemented.');
  }

  removeUser(id: number) {
    throw new Error('Method not implemented.');
  }

  getSocialAccounts() {
    throw new Error('Method not implemented.');
  }

  login(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  logout() {
    throw new Error('Method not implemented.');
  }
  register(user: User) {
    throw new Error('Method not implemented.');
  }
  getProfile() {
    throw new Error('Method not implemented.');
  }
  getToken() {
    throw new Error('Method not implemented.');
  }
  createJob(data: any) {
    throw new Error('Method not implemented.');
  }
  getJob(data: any) {
    throw new Error('Method not implemented.');
  }
}

export default DBProvider;
