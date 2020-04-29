
interface APIAdapterInterface {
  apiUrl: string;
  defaultOptions: any;
  requestInstance: any;
  getData(endPoint: string, token?: string): any;
  postData(endPoint: string, data: any, token?: string): any;
}

export default APIAdapterInterface;
