import IUser from './../interfaces/IUser';
import IAuth from './../interfaces/IAuth';
import ISocialApp from './../interfaces/ISocialApp';
import User from '../models/User';

class DBProvider implements IUser, IAuth, ISocialApp {
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
}

export default DBProvider;
