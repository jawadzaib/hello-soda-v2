import User from '../models/User';
import Http from '../core/Http';
import { API_URL } from '../constants';
import { config } from 'dotenv';
import IDataProvider from '../interfaces/IDataProvider';

class APIProvider implements IDataProvider {
  http: Http;
  constructor() {
    this.http = new Http(process.env.API_URL ? process.env.API_URL : API_URL);
  }

  async addUser(user: User) {
    return await this.http.post('/hellosodausers/create', user, false);
  }

  async getUsers() {
    return await this.http.get('/users');
  }

  async getUser(id: number) {
    return await this.http.get('/hellosodausers/');
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
  async getProfile() {
    return await this.http.get('/hellosodausers/');
  }
  async createJob(data: any) {
    return await this.http.post('/hellosodajobs/create', data);
  }
  async getJob(data: any) {
    return await this.http.get('/hellosodajobs', data);
  }
  getToken() {
    throw new Error("Method not implemented.");
  }
}

export default APIProvider;
