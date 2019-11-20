import { Gender } from '../services/utils';

export default class User {
  constructor(userName, userLastName, userAge, userGender) {
    this.name = userName;
    this.lastName = userLastName;
    this.age = userAge;
    this.gender = Gender[userGender];
  }
  getUser() {
    console.log('Init user');
    return `<p>${this.name} ${this.lastName}`;
  }
}