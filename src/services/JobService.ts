import User from '../models/User';
import SDKManager from '../core/SDKManager';
import ServiceUser from '../models/ServiceUser';
import Job from '../models/Job';

class JobService {
  static create(tokens: any, user: any) {
    try {
      const response = SDKManager.dataProvider.createQueueJob(
        {
          data: {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
          },
          tokens,
        },
        user.getId(),
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  static getById(id: string) {
    try {
      const response = SDKManager.dataProvider.getQueueJobById(id);
      return response.data ? response.data : null;
    } catch (error) {
      throw error;
    }
  }
  static getOne(data?: any) {
    try {
      const response = SDKManager.dataProvider.getQueueJob(data);
      return response.data ? response.data : null;
    } catch (error) {
      throw error;
    }
  }
  static get(data: any) {
    try {
      const response = SDKManager.dataProvider.getQueueJobs(data);
      return response.data ? response.data : null;
    } catch (error) {
      throw error;
    }
  }
}

export default JobService;
