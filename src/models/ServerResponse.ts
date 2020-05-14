class ServerResponse {
  status: boolean;
  data: any;
  message: string;
  constructor(response?: any, message: string = '') {
    this.status = response ? response.status : false;
    this.data = response && response.data ? response.data : response;
    this.message = message;
  }
}

export default ServerResponse;
