class Database {
  private mongoose: any;
  private userModel: any;
  private jobModel: any;
  private jobLogModel: any;
  constructor(mongoose?: any, validator?: any) {
    if (mongoose && validator) {
      this.mongoose = mongoose;
      const userSchema = new this.mongoose.Schema(
        {
          firstName: { type: 'string', required: true },
          lastName: { type: 'string', required: true },
          email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: (value: any) => {
              return validator.isEmail(value);
            },
          },
          password: { type: 'string', required: true },
          reports: { type: 'array', default: [] },
          createdDate: { type: Date, default: Date.now },
        },
        { minimize: false },
      );
      this.userModel = this.mongoose.model('User', userSchema);

      const jobSchema = new this.mongoose.Schema({
        user_id: { type: 'string', required: true, unique: true },
        job_object: { type: 'object', required: true },
        job_processed: { type: 'boolean', default: false },
        createdDate: { type: Date, default: Date.now },
      });
      this.jobModel = this.mongoose.model('JobQueue', jobSchema);

      const jobLogSchema = new this.mongoose.Schema({
        error_object: { type: 'string', required: true },
        createdDate: { type: Date, default: Date.now },
      });
      this.jobLogModel = this.mongoose.model('JobQueueLogs', jobLogSchema);
    }
  }

  getUserModel() {
    return this.userModel;
  }

  getJobModel() {
    return this.jobModel;
  }

  getJobLogModel() {
    return this.jobLogModel;
  }
}

export default Database;
