import User from '../models/User';

interface IAuth {
  login(username: string, password: string): any;
  logout(): any;
  register(user: User): any;
}

export default IAuth;
