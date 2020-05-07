import { Facebook, SDKManager } from './../index';

test('Get User Service', done => {
  SDKManager.useProvider(SDKManager.Type.API);
  Facebook.connect({appId: "613018332634917", appSecret: "a8fa8c13d4857a1713e80202ee676c30"});
  Facebook.getLoginURL("http://www.google.com").then(response => {
    console.log(response);
    done();
  })
  // Users.addUser({
  //   "firstName": "firstName",
  //   "lastName" : "lastName",
  //   "address1" : "shippingAddress1",
  //   "city"     : "shippingCity",
  //   "state"    : "AL",
  //   "zip"      : "1234",
  //   "country"  : "US",
  //   "phone"    : "000000000",
  //   "email"    : "abdulsalam1@gmail.com",
  //   "productId": 1,
  //   "campaignId": 1,
  //   "shippingId": 1,
  //   "notes"    : "test"
  // }).then(response => {
  //   console.log(response);
  //   done();
  // });
});
