import Message from "./message";

export default class MessageList {
  constructor() {
    this.node = document.createElement('section');
    this.node.className = 'message-list';
  }

  loadData(data) {
    this.node.innerHTML = '';
    data.forEach(el => {
      let message = new Message(el);
      this.node.appendChild(message.getNode());
    });
  }

  emptyList() {
    this.node.innerHTML = '';
  }

  getNode() {
    return this.node;
  }
}