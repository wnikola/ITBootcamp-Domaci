export default class Teacher {
  constructor(
    firstName,
    lastName,
    age,
    gender,
    subject
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.subject = subject;
    console.log( `Init teacher - ${this.firstName}`);
  }
  getTeacher(){
    return `<li>${this.firstName} ${this.lastName}`;
  }
}