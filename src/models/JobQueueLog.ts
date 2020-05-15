class JobQueueLog {
  id: string;
  error: string;
  createdDate: string;
  constructor(data?: any) {
    this.id = data && data.id ? data.id : '';
    this.error = data && data.error ? data.error : '';
    this.createdDate = data && data.createdDate ? data.createdDate : '';
  }

  getId() {
    return this.id;
  }
  getError() {
    return this.error;
  }
  getCreatedDate() {
    return this.createdDate;
  }
}

export default JobQueueLog;
