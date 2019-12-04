import Content from "./content";

export default class Dashboard {
  constructor() {
    this.node = document.createElement('dashboard');

    this.content = new Content();

    this.node.appendChild(this.content.getNode());
  }

  getNode() {
    return this.node;
  }
}