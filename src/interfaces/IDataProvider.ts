import User from "../models/User";
import Job from "../models/Job";

interface IDataProvider {
    login(username: string, password: string) : any;
    logout(): any;
    register(user: User): any;
    getProfile(): any;
    getToken(): any;
    addUser(user: User): any;
    getUsers(): any;
    getUser(id: number): any;
    removeUser(id: number): any;
    getSocialAccounts(): any;
    createJob(data: any): any;
    getJob(data: any): any;
}

export default IDataProvider