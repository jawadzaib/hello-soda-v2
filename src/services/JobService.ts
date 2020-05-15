import User from '../models/User';
import SDKManager from '../core/SDKManager';
import ServiceUser from '../models/ServiceUser';
import Job from '../models/Job';

class JobService {
  create(applicationId: string, tokens: any, user: ServiceUser) {
    try {
      const response = SDKManager.dataProvider.createQueueJob(
        {
          data: {
            first_name: user.getFirstName(),
            last_name: user.getLastName(),
            email: user.getEmail(),
          },
          application_id: applicationId,
          tokens,
        },
        user.getId(),
      );
      return response
    } catch (error) {
      throw error;
    }
  }

  getById(id: string) {
    try {
      const response = SDKManager.dataProvider.getQueueJobById(id);
      return (response.data) ? response.data : null
    } catch (error) {
      throw error;
    }
  }
  getOne(data?: any) {
    try {
      const response = SDKManager.dataProvider.getQueueJob(data);
      return (response.data) ? response.data : null
    } catch (error) {
      throw error;
    }
  }
  get(data: any) {
    try {
      const response = SDKManager.dataProvider.getQueueJobs(data);
      return (response.data) ? response.data : null
    } catch (error) {
      throw error;
    }
  }
}

export default JobService;
