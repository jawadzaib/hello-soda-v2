import User from '../models/User';

interface IUser {
  addUser(user: User): any;
  getUsers(): any;
  getUser(id: number): any;
  removeUser(id: number): any;
  getSocialAccounts(): any;
}

export default IUser;
