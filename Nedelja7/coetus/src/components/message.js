export default class Message {
  constructor({ username, message, timestamp }) {
    this.username = username;
    this.message = message;
    this.timestamp = timestamp;

    this.txtUsername = document.createElement('span');
    this.txtUsername.textContent = `${this.username}:`;
    this.txtUsername.style.margin = '5px';

    this.txtMessage = document.createElement('span');
    this.txtMessage.textContent = this.message;
    this.txtMessage.style.margin = '5px';

    this.txtDate = document.createElement('span');
    let newDate = new Date(this.timestamp).toLocaleTimeString();
    // let time = `${newDate.getHours()}:${newDate.getMinutes()}`;
    // this.txtDate.textContent = time;
    this.txtDate.textContent = newDate;
    this.txtDate.style.margin = '5px';

    this.node = document.createElement('div');
    this.node.appendChild(this.txtDate);
    this.node.appendChild(this.txtUsername);
    this.node.appendChild(this.txtMessage);
  }

  getNode() {
    return this.node;
  }
}