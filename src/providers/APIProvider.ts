import IUser from '../interfaces/IUser';
import IAuth from '../interfaces/IAuth';
import ISocialApp from '../interfaces/ISocialApp';
import { config } from 'dotenv';
import User from '../models/User';
import Http from '../core/Http';

class APIProvider implements IUser, IAuth, ISocialApp {
  http: Http;
  constructor() {
    this.http = new Http(process.env.API_URL ? process.env.API_URL : '');
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
    return await this.http.post('/auth/login', {username: uname, password: pass}, false);
  }
  async logout() {
    return await this.http.post('/auth/logout', {});
  }
  async register(user: User) {
    return await this.http.post('/auth/register', user, false);
  }
}

export default APIProvider;
