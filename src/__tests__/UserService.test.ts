import { UserService } from './../index';
import SDKManager from '../core/SDKManager';

test('Get User Service', () => {
  SDKManager.useProvider(SDKManager.Type.Database);
  UserService.addUser({firstName: "test"});
});
