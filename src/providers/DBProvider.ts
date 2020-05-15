import User from '../models/User';
import IDataProvider from '../interfaces/IDataProvider';
import ServerException from '../models/ServerException';
import ServerResponse from '../models/ServerResponse';
import Database from '../core/Database';
import JobQueue from '../models/JobQueue';
import JobQueueLog from '../models/JobQueueLog';

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
  async createQueueJob(data: any, userId?: any) {
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
        return new ServerResponse(new JobQueue(job));
      } else {
        let jobData = { user_id: userId, job_object: data}
        let job = new this.jobModel(jobData)
        try {
          let response = await job.save()
          if(response.id) {
            return new ServerResponse(new JobQueue(response))
          } else {
            return Promise.reject(new ServerException('Unable to process the request'));
          }
        } catch(error) {
          return Promise.reject(new ServerException((error.code == '11000') ? 'Duplicate entry error' : 'Unable to save job'))
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
      let log = new this.jobLogModel(data)
      log.save()
      return new ServerResponse(new JobQueueLog(log))
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
  async getQueueJobById(id: string) {
    try {
      const job = await this.jobModel.findById(id);
      if(job.id) {
        return new ServerResponse(new JobQueue(job))
      } else {
        return Promise.reject(new ServerException('Unable to process the request'));
      }
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
  async getQueueJob(data?: any) {
    try {
      const job = await this.jobModel.findOne(data);
      if(job.id) {
        return new ServerResponse(new JobQueue(job))
      } else {
        return Promise.reject(new ServerException('Unable to process the request'));
      }
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
  async getQueueJobs(data?: any, limit?: null) {
    try {
      const jobsData = await this.jobModel.find(data).limit(limit);
      if(jobsData) {
        let jobs = new Array<JobQueue>()
        jobsData.forEach((item: any) => {
          jobs.push(new JobQueue(item))
        })
        return new ServerResponse(jobs)
      } else {
        return Promise.reject(new ServerException('Unable to process the request'));
      }
    } catch (error) {
      return Promise.reject(new ServerException('Unable to process the request'));
    }
  }
}

export default DBProvider;
