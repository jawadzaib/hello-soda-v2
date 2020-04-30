import SDKManager from "../core/SDKManager";
import User from "../models/User";


class AuthService {
    static getToken() {
      return sessionStorage.getItem("SOCIAL_APP_TOKEN");
    }
    static setToken(token: string) {
        sessionStorage.setItem("SOCIAL_APP_TOKEN", token);
    }
    static async login(username: string, password: string) {
        
    }
    static async logout() {

    }
    static async register(user: User) {

    }
}

export default AuthService;