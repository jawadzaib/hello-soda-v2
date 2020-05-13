import User from '../models/User';
import SDKManager from '../core/SDKManager';
import IJob from '../interfaces/IJob';

class JobService implements IJob {
  create() {
    throw new Error('Method not implemented.');
  }
}

export default JobService;
