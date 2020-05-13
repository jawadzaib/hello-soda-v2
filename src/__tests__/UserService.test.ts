import { Facebook, SDKManager, Auth, Users } from './../index';
import ServiceUser from '../models/ServiceUser';

test('Get User Service', (done) => {
  SDKManager.useProvider(SDKManager.Type.API);
  // done();
  // Auth.getProfile().then(response => {
  //   if(response) {
  //     console.log(response.getReports());
  //   }
  //   done();
  // })
  // const user = new ServiceUser({
  //   firstName: 'Jawad',
  //   lastName: 'Zaib',
  //   email: 'jawad@censeo-partners.com',
  //   password: 'admin'
  // });
  // Users.addUser(user).then((response) => {
  //   done();
  // });
  Auth.login("jawad@censeo-partners.com", "admin").then(response => {
    if(response) {
      done();
    }
  }).catch(error => {
    console.log(error);
  })
  // Facebook.connect({ appId: '613018332634917', appSecret: 'a8fa8c13d4857a1713e80202ee676c30' });
  // Facebook.getLoginURL('http://www.google.com').then((response) => {
  //   console.log(response);
  //   done();
  // });
});
