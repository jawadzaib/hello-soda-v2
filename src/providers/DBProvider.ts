import User from '../models/User';
import IDataProvider from '../interfaces/IDataProvider';

class DBProvider implements IDataProvider {
  private mongoose: any;
  public userModel: any;
  initialize(mongoose: any, validator: any) {
    this.mongoose = mongoose;
    const userSchema = new this.mongoose.Schema(
      {
        firstName: { type: 'string', required: true },
        lastName: { type: 'string', required: true },
        email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          validate: (value: any) => {
            return validator.isEmail(value);
          },
        },
        password: { type: 'string', required: true },
        reports: { type: 'array', default: [] },
        createdDate: { type: Date, default: Date.now },
      },
      { minimize: false },
    );
    this.userModel = this.mongoose.model('User', userSchema);
    return this
  }
  addUser(user: User) {
    throw new Error('Method not implemented.');
  }

  getUsers() {
    throw new Error('Method not implemented.');
  }

  getUser(id: number) {
    return this.userModel.findOne({ user_id: id });
  }

  removeUser(id: number) {
    throw new Error('Method not implemented.');
  }

  getSocialAccounts() {
    throw new Error('Method not implemented.');
  }

  login(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  logout() {
    throw new Error('Method not implemented.');
  }
  register(user: User) {
    throw new Error('Method not implemented.');
  }
  getProfile() {
    throw new Error('Method not implemented.');
  }
  getToken() {
    throw new Error('Method not implemented.');
  }
  createJob(data: any) {
    throw new Error('Method not implemented.');
  }
  getJob(data: any) {
    throw new Error('Method not implemented.');
  }
}

export default DBProvider;
