import SDKManager from '../core/SDKManager';

class SocialAppService {
  static async getSocialAccounts() {
    const response = await SDKManager.dataProvider.getSocialAccounts();
    return response ? response.status : false;
  }

  static async getEmployibility() {
    const response = await SDKManager.dataProvider.getEmployibility();
    return response ? response.status : false;
  }

  static async getOverallScore() {
    const response = await SDKManager.dataProvider.getOverallScore();
    return response ? response.status : false;
  }
}

export default SocialAppService;
