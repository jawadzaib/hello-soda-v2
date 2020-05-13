import axios from 'axios';
import AuthService from '../services/AuthService';
import { Auth } from '..';

class Http {
  defaultOptions: any;
  requestInstance: any;
  apiUrl: string = '';
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
    this.defaultOptions = {
      headers: {
        'Access-Control-Allow-Origin': true,
      },
    };
    this.requestInstance = axios.create({
      baseURL: this.apiUrl,
    });
  }

  async get(endPoint: string, useToken: boolean = true) {
    const options = this.defaultOptions;
    if (useToken) {
      options.headers['x-access-token'] = AuthService.getToken();
    }
    try {
      const response = await this.requestInstance.get(endPoint, options);
      return response && response.data ? response.data : { status: false, error: 'Error occurred' };
    } catch (e) {
      return Promise.reject({ status: false, error: e });
    }
  }

  async post(endPoint: string, data: any, useToken: boolean = true) {
    const options = this.defaultOptions;
    if (useToken) {
      options.headers['x-access-token'] = AuthService.getToken();
    }

    try {
      const response = await this.requestInstance.post(endPoint, data, options);
      return response && response.data ? response.data : { status: false, error: 'Error occurred' };
    } catch (e) {
      return Promise.reject({ status: false, error: e });
    }
  }
}

export default Http;
