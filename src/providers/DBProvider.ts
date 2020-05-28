import User from '../models/User';
import IDataProvider from '../interfaces/IDataProvider';
import ServerException from '../models/ServerException';
import ServerResponse from '../models/ServerResponse';
import Database from '../core/Database';
import JobQueue from '../models/JobQueue';
import JobQueueLog from '../models/JobQueueLog';
import SDKManager from '../core/SDKManager';

class DBProvider implements IDataProvider {
  private database: Database;
  constructor(mongoose: any, validator: any) {
    this.database = new Database(mongoose, validator);
    SDKManager.UserModel = this.database.getUserModel();
    SDKManager.JobQueueModel = this.database.getJobModel();
    SDKManager.JobQueueLogModel = this.database.getJobLogModel();
    SDKManager.ReportQueueModel = this.database.getReportModel();
  }

  async addUser(user: User) {
    try {
      let response = await SDKManager.UserModel.findOne({ email: user.getEmail() });
      if (response) {
        return Promise.reject(new ServerException('User already exists!'));
      }
      const userModel = new SDKManager.UserModel(user);
      response = await userModel.save();
      return new ServerResponse({ status: true, data: response });
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }

  getUsers() {
    throw new Error('Method not implemented.');
  }

  async getUser(id: string) {
    try {
      const response = await SDKManager.UserModel.findById(id);
      return new ServerResponse({ status: true, data: response });
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }

  async getUserByEmail(email: string) {
    try {
      const response = await SDKManager.UserModel.findOne({ email });
      return new ServerResponse({ status: true, data: response });
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
  async createQueueJob(data: any, userId?: any) {
    try {
      const job = await SDKManager.JobQueueModel.findOne({ user_id: userId });
      if (job != null && job.id !== '') {
        const dbTokens = job.job_object.tokens;
        const reqTokens = data.tokens;
        // traverse on db tokens & add in request which are not present
        if (dbTokens) {
          for (const dbkey in dbTokens) {
            if (dbTokens.hasOwnProperty(dbkey)) {
              let found = false;
              if (reqTokens) {
                for (const reqKey in reqTokens) {
                  if (reqTokens.hasOwnProperty(reqKey) && reqKey === dbkey) {
                    found = true;
                  }
                }
              }
              if (!found) {
                data.tokens[dbkey] = dbTokens[dbkey];
              }
            }
          }
        }
        job.job_processed = false;
        job.job_object = data;
        job.save();
        return new ServerResponse({ status: true, data: new JobQueue(job) });
      } else {
        const jobData = { user_id: userId, job_object: data };
        const newJob = new SDKManager.JobQueueModel(jobData);
        try {
          const response = await newJob.save();
          if (response.id) {
            return new ServerResponse({ status: true, data: new JobQueue(response) });
          } else {
            return Promise.reject(new ServerException('Unable to process the request'));
          }
        } catch (error) {
          return Promise.reject(
            new ServerException(error.code === '11000' ? 'Duplicate entry error' : 'Unable to save job'),
          );
        }
      }
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
  getJob(data: any) {
    throw new Error('Method not implemented.');
  }
  async createJobLog(data: any, userId?: string | '') {
    try {
      const log = new SDKManager.JobQueueModel(data);
      log.save();
      return new ServerResponse({ status: true, data: new JobQueueLog(log) });
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
  async getQueueJobById(id: string) {
    try {
      const job = await SDKManager.JobQueueModel.findById(id);
      if (job.id) {
        return new ServerResponse({ status: true, data: new JobQueue(job) });
      } else {
        return Promise.reject(new ServerException('Unable to process the request'));
      }
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
  async getQueueJob(data?: any) {
    try {
      const job = await SDKManager.JobQueueModel.findOne(data);
      if (job.id) {
        return new ServerResponse({ status: true, data: new JobQueue(job) });
      } else {
        return Promise.reject(new ServerException('Unable to process the request'));
      }
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
  async getQueueJobs(data?: any, limit?: null) {
    try {
      const jobsData = await SDKManager.JobQueueModel.find(data).limit(limit);
      if (jobsData) {
        const jobs = new Array<JobQueue>();
        jobsData.forEach((item: any) => {
          jobs.push(new JobQueue(item));
        });
        return new ServerResponse({ status: true, data: jobs });
      } else {
        return Promise.reject(new ServerException('Unable to process the request'));
      }
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
}

export default DBProvider;
