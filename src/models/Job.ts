import ServiceUser from "./ServiceUser";


class Job {
  id: string
  regTime: string
  clientId: string
  productId: string
  applicationId: string;
  status: string
  jobUrl: string
  reportUrl: string
  connected: boolean
  user: ServiceUser

  constructor(data?: any, user?: ServiceUser) {
    this.id = (data) ? data.job_id : ""
    this.regTime = (data) ? data.reg_time : ""
    this.clientId = (data) ? data.client_id : ""
    this.productId = (data) ? data.product_id : ""
    this.applicationId = (data) ? data.application_id : ""
    this.status = (data) ? data.status : ""
    this.jobUrl = (data) ? data.job_url : ""
    this.reportUrl = (data) ? data.report_url : ""
    this.connected = (data) ? data.connected : false
    this.user = (user) ? user : new ServiceUser()
  }
}

export default Job;
