abstract class User {
  protected id: string;
  protected firstName: string;
  protected lastName: string;
  protected address1: string;
  protected city: string;
  protected state: string;
  protected zip: string;
  protected country: string;
  protected phone: string;
  protected email: string;
  protected password: string;
  protected birthdate: string;
  constructor(data?: any) {
    this.id = data && data.id ? data.id : '';
    this.firstName = data && data.firstName ? data.firstName : '';
    this.lastName = data && data.lastName ? data.lastName : '';
    this.address1 = data && data.address1 ? data.address1 : '';
    this.city = data && data.city ? data.city : '';
    this.state = data && data.state ? data.state : '';
    this.zip = data && data.zip ? data.zip : '';
    this.country = data && data.country ? data.country : '';
    this.phone = data && data.phone ? data.phone : '';
    this.email = data && data.email ? data.email : '';
    this.password = data && data.password ? data.password : '';
    this.birthdate = data && data.birthdate ? data.birthdate : '';
  }

  getAddress1() {
    return this.address1;
  }
  setAddress1(address1: string) {
    this.address1 = address1;
  }
  getId() {
    return this.id;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getCity() {
    return this.city;
  }
  getPhone() {
    return this.phone;
  }
  getEmail() {
    return this.email;
  }
  getCountry() {
    return this.country;
  }
  getZip() {
    return this.zip;
  }
  getPassword() {
    return this.password;
  }
  getBirthdate() {
    return this.birthdate;
  }
}

export default User;
