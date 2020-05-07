import IUser from '../interfaces/IUser';
import IAuth from '../interfaces/IAuth';
import ISocialApp from '../interfaces/ISocialApp';
import User from '../models/User';
import Http from '../core/Http';
import SDKManager from '../core/SDKManager';

class APIProvider implements IUser, IAuth, ISocialApp {
  http: Http;
  constructor() {
    this.http = new Http(SDKManager.API_URL);
  }

  async addUser(user: User) {
    return await this.http.post('/users/create', user);
  }

  async getUsers() {
    return await this.http.get('/users');
  }

  async getUser(id: number) {
    return await this.http.get('/users/' + id);
  }

  async removeUser(id: number) {
    return await this.http.post('/users/delete', id);
  }

  async getSocialAccounts() {
    return await this.http.get('/users/socialAccounts');
  }
  async login(uname: string, pass: string) {
    return await this.http.post('/hellosodausers/login', { email: uname, password: pass }, false);
  }
  async logout() {
    return await this.http.post('/hellosodausers/login', {});
  }
  async register(user: User) {
    return await this.http.post('/hellosodausers/create', user, false);
  }
}

export default APIProvider;
