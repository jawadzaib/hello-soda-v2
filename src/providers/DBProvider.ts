import IUserProvider from './../interfaces/IUser';
import User from '../models/User';

class DBProvider implements IUserProvider {
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
}

export default DBProvider;
