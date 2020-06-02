import User from '../models/User';
import Http from '../core/Http';
import { API_URL } from '../constants';
import { config } from 'dotenv';
import IDataProvider from '../interfaces/IDataProvider';
import AuthService from '../services/AuthService';
import ServerResponse from '../models/ServerResponse';
import JobQueue from '../models/JobQueue';
import ServerException from '../models/ServerException';

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

  async getUser(id: string) {
    return await this.http.get('/hellosodausers/');
  }

  getUserByEmail(email: string) {
    throw new Error('Method not implemented.');
  }

  async removeUser(id: string) {
    return await this.http.post('/users/delete', id);
  }

  async getSocialAccounts() {
    return await this.http.get('/users/socialAccounts');
  }
  async login(uname: string, pass: string) {
    const response = await this.http.post('/hellosodausers/login', { email: uname, password: pass }, false);
    if (response.data.token) {
      AuthService.setToken(response.data.token);
    }
    return response;
  }
  async logout() {
    return await this.http.post('/hellosodausers/logout', {});
  }
  async register(user: User) {
    const response = await this.http.post('/hellosodausers/create', user, false);
    if (response.data.token) {
      AuthService.setToken(response.data.token);
    }
    return response;
  }
  async getProfile() {
    return await this.http.get('/hellosodausers/');
  }
  async updateProfile(user: any) {
    return await this.http.post('/hellosodausers/update', user);
  }
  async createQueueJob(data: any, userId?: string | '') {
    return await this.http.post('/hellosodajobs/create', data);
  }
  async getJob(data: any) {
    return await this.http.get('/hellosodajobs', data);
  }
  createJobLog(data: any, userId?: string | '') {
    throw new Error('Method not implemented.');
  }
  getQueueJobById(id: string) {
    throw new Error('Method not implemented.');
  }
  getQueueJob(data?: any) {
    throw new Error('Method not implemented.');
  }
  getQueueJobs(data?: any, limit?: any) {
    throw new Error('Method not implemented.');
  }
  getToken() {
    throw new Error('Method not implemented.');
  }
}

export default APIProvider;
