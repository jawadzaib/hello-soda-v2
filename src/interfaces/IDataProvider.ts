import User from '../models/User';
import Job from '../models/Job';

interface IDataProvider {
  login(username: string, password: string): any;
  logout(): any;
  register(user: User): any;
  getProfile(): any;
  getToken(): any;
  addUser(user: User): any;
  getUsers(): any;
  getUser(id: string): any;
  getUserByEmail(email: string): any;
  removeUser(id: string): any;
  getSocialAccounts(): any;
  createQueueJob(data: any, userId?: string): any;
  createJobLog(data: any, userId?: string): any;
  getJob(data: any): any;
  getQueueJobById(id: string): any;
  getQueueJob(data?: any): any;
  getQueueJobs(data?: any, limit?: any): any;
}

export default IDataProvider;
