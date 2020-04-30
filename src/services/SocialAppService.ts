import SDKManager from '../core/SDKManager';

class SocialAppService {
  static async getSocialAccounts() {
    const response = await SDKManager.dataProvider.getSocialAccounts();
    return response ? response.status : false;
  }
}

export default SocialAppService;
