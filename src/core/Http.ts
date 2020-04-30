import axios from "axios";
import AuthService from "../services/AuthService";

class Http {
    defaultOptions: any;
    requestInstance: any;
    apiUrl: string = '';
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
        this.defaultOptions = {
            headers: {
                'Access-Control-Allow-Origin': true
            }
        };
        this.requestInstance = axios.create({
            baseURL: this.apiUrl
        });
    }

    async get(endPoint: string, useToken: boolean = true) {
        const options = this.defaultOptions;
        if(useToken) {
            options.headers.Authorization = AuthService.getToken();
        }
        try {
            const response = await this.requestInstance.get(this.apiUrl+endPoint, options);
            return {status: true, data: response};
        } catch (e) {
            return {status: false};
        }
    }
  
    async post(endPoint: string, data: any, useToken: boolean = true) {
        const options = this.defaultOptions;
        if(useToken) {
            options.headers.Authorization = AuthService.getToken();
        }
        
        try {
            const response = await this.requestInstance.post(this.apiUrl+endPoint, data, options);
            return {status: true, data: response};
        } catch (e) {
            return {status: false};
        }
    }  
}

export default Http;
