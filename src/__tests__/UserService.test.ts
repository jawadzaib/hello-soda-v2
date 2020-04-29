import { UserService } from './../index';

test('Get User Service', () => {
  expect(UserService.getUser(32)).toStrictEqual({ firstName: 'test', lastName: 'test' });
});

test('Add User Service', () => {
  expect(UserService.addUser({ firstName: 'test', lastName: 'last name' })).toStrictEqual(undefined);
});
