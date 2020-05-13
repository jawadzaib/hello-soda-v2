

abstract class User {
    protected firstName: string;    
    protected lastName: string;
    constructor(data: any) {
        this.firstName = data.firstName
        this.lastName = data.lastName
    }
    getAddress1() {
    }
    setAddress1(address1: string) {
    }
    getFirstName() {}
    getLastName() {}
    getCity() {}
    getPhone() {}
    getEmail() {}
    getCountry() {}
    getZip() {}
    getJobs() {}
    getAccounts() {}
}

export default User;