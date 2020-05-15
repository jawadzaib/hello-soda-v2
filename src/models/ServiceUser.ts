import User from './User';
import Job from './Job';
import SocialAccount from './SocialAccount';
import Report from './Report';

class ServiceUser extends User {
  protected jobs: Job[];
  protected accounts: SocialAccount[];
  protected reports: Report[];
  protected currentReport: Report;

  constructor(data?: any) {
    super(data);
    this.jobs = data && data.jobs ? data.jobs : new Array();
    this.accounts = data && data.accounts ? data.accounts : new Array();
    this.reports = new Array<Report>();
    if (data && data.reports) {
      data.reports.forEach((item: any) => {
        this.reports.push(new Report(item));
      });
    }
    this.currentReport = this.reports ? this.reports[this.reports.length - 1] : new Report();
  }

  getJobs() {
    return this.jobs;
  }
  getAccounts() {
    return this.accounts;
  }
  getReports() {
    return this.reports;
  }
  getCurrentReport() {
    return this.currentReport;
  }
}

export default ServiceUser;
