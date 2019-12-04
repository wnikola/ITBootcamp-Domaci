export default class Form {
  constructor(inPlace, btnTxt) {
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = inPlace;

    this.btn = document.createElement('button');
    this.btn.textContent = btnTxt;
    this.btn.className = 'btn';

    this.node = document.createElement('div');
    this.node.className = 'form';
    this.node.appendChild(this.input);
    this.node.appendChild(this.btn);
  }

  btnAddClickEvent(onclick) {
    this.btn.addEventListener('click', onclick);
  }

  getNode() {
    return this.node;
  }
}