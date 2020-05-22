import axios from 'axios';
import AuthService from '../services/AuthService';
import ServerResponse from '../models/ServerResponse';
import ServerException from '../models/ServerException';

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
      return (response && response.data) ? response.data as ServerResponse : new ServerResponse({status: false, data: null})
    } catch (e) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }

  async post(endPoint: string, data: any, useToken: boolean = true) {
    const options = this.defaultOptions;
    if (useToken) {
      options.headers['x-access-token'] = AuthService.getToken();
    }

    try {
      const response = await this.requestInstance.post(endPoint, data, options);
      return (response && response.data) ? response.data as ServerResponse : new ServerResponse({status: false, data: null})
    } catch (e) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
}

export default Http;
