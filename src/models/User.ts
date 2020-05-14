abstract class User {
  protected firstName: string;
  protected lastName: string;
  constructor(data?: any) {
    this.firstName = data && data.firstName ? data.firstName : '';
    this.lastName = data && data.lastName ? data.lastName : '';
  }
}

export default User;
