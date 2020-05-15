import User from '../models/User';
import IDataProvider from '../interfaces/IDataProvider';
import ServerException from '../models/ServerException';
import ServerResponse from '../models/ServerResponse';
import Database from '../core/Database';

class DBProvider implements IDataProvider {
  private database: Database;
  private userModel: any;
  private jobModel: any;
  private jobLogModel: any;
  constructor(mongoose: any, validator: any) {
    this.database = new Database(mongoose, validator);
    this.userModel = this.database.getUserModel();
    this.jobModel = this.database.getJobModel();
    this.jobLogModel = this.database.getJobLogModel();
  }

  async addUser(user: User) {
    try {
      let response = await this.userModel.findOne({ email: user.getEmail() });
      if (response) {
        return Promise.reject(new ServerException('User already exists!'));
      }
      let userModel = new this.userModel(user);
      response = await userModel.save();
      return new ServerResponse(response);
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }

  getUsers() {
    throw new Error('Method not implemented.');
  }

  async getUser(id: string) {
    try {
      let response = await this.userModel.findById(id);
      return new ServerResponse(response);
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }

  async getUserByEmail(email: string) {
    try {
      let response = await this.userModel.findOne({ email: email });
      return new ServerResponse(response);
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }

  removeUser(id: string) {
    throw new Error('Method not implemented.');
  }

  getSocialAccounts() {
    throw new Error('Method not implemented.');
  }

  login(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  logout() {
    throw new Error('Method not implemented.');
  }
  register(user: User) {
    throw new Error('Method not implemented.');
  }
  getProfile() {
    throw new Error('Method not implemented.');
  }
  getToken() {
    throw new Error('Method not implemented.');
  }
  async createJob(data: any, userId?: any) {
    try {
      const job = await this.jobModel.findOne({ user_id: userId });
      if (job != null && job.id !== '') {
        let dbTokens = job.job_object.tokens;
        let reqTokens = data.tokens;
        //traverse on db tokens & add in request which are not present
        for (let dbkey in dbTokens) {
          let found = false;
          for (var reqKey in reqTokens) {
            if (reqKey == dbkey) {
              found = true;
            }
          }
          if (!found) {
            data.tokens[dbkey] = dbTokens[dbkey];
          }
        }
        job.job_processed = false;
        job.job_object = data;
        job.save();
        return new ServerResponse(job);
      } else {
      }
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
  getJob(data: any) {
    throw new Error('Method not implemented.');
  }
  createJobLog(data: any, userId?: string | '') {
    throw new Error('Method not implemented.');
  }
}

export default DBProvider;
