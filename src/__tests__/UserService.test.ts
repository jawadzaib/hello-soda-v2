import { Facebook, SDKManager, Auth, Users, Jobs } from './../index';

test('Get User Service', (done) => {
  SDKManager.useProvider(SDKManager.Type.API);
  // done();

  // Auth.getProfile().then((user) => {
  //   if (user) {
  //     Jobs.create(
  //       '200308794873',
  //       {
  //         facebook: '3a5751f6eff0fb4b5a160012fa13f22d',
  //       },
  //       user,
  //     ).then((response: any) => {
  //       console.log(response);
  //       done();
  //     });
  //   }
  // });
  // const user = new ServiceUser({
  //   firstName: 'Jawad',
  //   lastName: 'Zaib',
  //   email: 'jawad@censeo.com',
  //   password: 'admin'
  // });
  // Users.addUser(user).then((response) => {
  //   console.log(response)
  //   done();
  // });
  Auth.login('jawad@censeo-partners.com', 'admin')
    .then((response: any) => {
      console.log(response);
      if (response) {
        done();
      }
    })
    .catch((error) => {
      console.log(error);
    });
  // Facebook.connect({ appId: '613018332634917', appSecret: 'a8fa8c13d4857a1713e80202ee676c30' });
  // Facebook.getLoginURL('http://www.google.com').then((response) => {
  //   console.log(response);
  //   done();
  // });
});
