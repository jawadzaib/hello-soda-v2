import APIProvider from './../providers/APIProvider';
import DBProvider from '../providers/DBProvider';
import { API_URL } from './../constants';

class SDKManager {
  static dataProvider: any = new APIProvider();
  static Type = { API: 0, Database: 1 };
  
  static useProvider(providerName: number) {
    let provider = null;
    switch (providerName) {
      case SDKManager.Type.API:
        provider = new APIProvider();
        break;
      case SDKManager.Type.Database:
        provider = new DBProvider();
        break;
      default:
        provider = SDKManager.dataProvider;
    }
    return (SDKManager.dataProvider = provider);
  }
}

export default SDKManager;
