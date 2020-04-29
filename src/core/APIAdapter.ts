import APIAdapterInterface from './APIAdapter.interface';
import axios from "axios";
import { config } from 'dotenv';

class APIAdapter implements APIAdapterInterface {
  defaultOptions: any;
  requestInstance: any;
  apiUrl: string = '';
  constructor() {
    this.apiUrl = process.env.API_URL ? process.env.API_URL : '';
    this.defaultOptions = {
      headers: {
        'Access-Control-Allow-Origin': true
      }
    };
    this.requestInstance = axios.create({
      baseURL: this.apiUrl
    });
  }

  async getData(endPoint: string, token:string = "") {
    const options = this.defaultOptions;
    if(token) {
      options.headers.Authorization = token;
    }
    try {
    const response = await this.requestInstance.get(this.apiUrl+endPoint, options);
      return {status: true, data: response};
    } catch (e) {
      return {status: false};
    }
  }
  
  async postData(endPoint: string, data: any, token: string = "") {
    const options = this.defaultOptions;
    if(token) {
      options.headers.Authorization = token;
    }
    
    try {
      const response = await this.requestInstance.post(this.apiUrl+endPoint, data, options);
      return {status: true, data: response};
    } catch (e) {
      return {status: false};
    }
  }
}

export default APIAdapter;
