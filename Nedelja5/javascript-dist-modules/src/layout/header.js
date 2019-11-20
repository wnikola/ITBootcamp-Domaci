import User from '../components/user';

export default class Header {
  constructor() {
  }
  getHtml() {
    console.log('Init header');
    const nikola = new User('Nikola', 'Mihajlovic', 24, 0);
    return `<header>${nikola.getUser()}</header>`;
  }
}