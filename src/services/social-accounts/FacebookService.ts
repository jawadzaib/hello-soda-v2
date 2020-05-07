var { FB } = require('fb');

class FacebookService {
  static async connect(options: any) {
    FB.options(options);
  }
  static async getLoginURL(redirectUrl: string) {
    return FB.getLoginUrl({
        scope: 'email,user_likes',
        redirect_uri: redirectUrl
    });
  }

  static async getProfile(token: string, fields: ["id", "name"]) {
    return FB.api('me', {fields: fields, access_token: token});
  }
}

export default FacebookService;
