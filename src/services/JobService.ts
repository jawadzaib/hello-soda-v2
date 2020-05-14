import User from '../models/User';
import SDKManager from '../core/SDKManager';
import ServiceUser from '../models/ServiceUser';
import Job from '../models/Job';

class JobService {
  create(applicationId: string, tokens: any, user: ServiceUser) {
    try {
      const response = SDKManager.dataProvider.createJob({
        data: {
          first_name: user.getFirstName(),
          last_name: user.getLastName(),
          email: user.getEmail(),
        },
        application_id: applicationId,
        tokens,
      });
      if (response.success) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  getOne(id: string, fetchReport: boolean = true) {
    try {
      const response = SDKManager.dataProvider.getJob({
        job_id: id,
        report: fetchReport ? 1 : 0,
      });
      if (response && response.data) {
        const job = new Job(response.data[0]);
        return job;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default JobService;
