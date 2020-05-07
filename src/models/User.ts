import SocialAccount from './SocialAccount';

interface User {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  accounts: SocialAccount[];
}

export default User;
