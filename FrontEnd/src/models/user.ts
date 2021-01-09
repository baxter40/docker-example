export class User
{
  id: number;
  firstName: string;
  lastName: string;

  constructor() { }

  newUser(_firstName: string, _lastName: string)
  {
    this.firstName = _firstName;
    this.lastName = _lastName;
  }
}
