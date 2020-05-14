import User from './User';
import Job from './Job';
import SocialAccount from './SocialAccount';
import Report from './Report';

class ServiceUser extends User {
  protected address1: string;
  protected city: string;
  protected state: string;
  protected zip: string;
  protected country: string;
  protected phone: string;
  protected email: string;
  protected password: string;
  protected jobs: Job[];
  protected accounts: SocialAccount[];
  protected reports: Report[];
  protected currentReport: Report;
  // constructor() {
  //     super();
  //     this.address1 = "";
  //     this.city = "";
  //     this.state = "";
  //     this.zip = "";
  //     this.country = "";
  //     this.phone = "";
  //     this.email = "";
  //     this.jobs = new Array();
  //     this.accounts = new Array();
  // }
  constructor(data?: any) {
    super(data);
    this.address1 = data && data.address1 ? data.address1 : '';
    this.city = data && data.city ? data.city : '';
    this.state = data && data.state ? data.state : '';
    this.zip = data && data.zip ? data.zip : '';
    this.country = data && data.country ? data.country : '';
    this.phone = data && data.phone ? data.phone : '';
    this.email = data && data.email ? data.email : '';
    this.password = data && data.password ? data.password : '';
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
  getAddress1() {
    return this.address1;
  }
  setAddress1(address1: string) {
    this.address1 = address1;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getCity() {
    return this.city;
  }
  getPhone() {
    return this.phone;
  }
  getEmail() {
    return this.email;
  }
  getCountry() {
    return this.country;
  }
  getZip() {
    return this.zip;
  }
  getPassword() {
    return this.password;
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
