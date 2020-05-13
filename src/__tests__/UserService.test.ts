import { Facebook, SDKManager, Auth, Users } from './../index';
import ServiceUser from "../models/ServiceUser";

test('Get User Service', (done) => {
  SDKManager.useProvider(SDKManager.Type.API);
  // Users.getUser(23423).then(response => {
  //   console.log(response.getFirstName())
  // })
  const user = new ServiceUser({
    "firstName": "firstName",
    "lastName" : "lastName",
    "address1" : "shippingAddress1",
    "city"     : "shippingCity",
    "state"    : "AL",
    "zip"      : "1234",
    "country"  : "US",
    "phone"    : "000000000",
    "email"    : "abdulsalam1@gmail.com"
  });
  Users.addUser(user).then(response => {
    // console.log(response);
    done();
  });
  // Auth.login("testing", "1223").then(response => {
  //   console.log("success");
  // }).catch(error => {
  //   console.log(error);
  // })
  // Facebook.connect({ appId: '613018332634917', appSecret: 'a8fa8c13d4857a1713e80202ee676c30' });
  // Facebook.getLoginURL('http://www.google.com').then((response) => {
  //   console.log(response);
  //   done();
  // });
});
