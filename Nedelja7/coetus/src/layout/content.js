import MessageList from "../components/messageList";
import Form from "../components/form";
import { addMessage, getMessages, getUserMessage } from "../utils/services";

export default class Content {
  constructor() {
    this.node = document.createElement('div');
    this.node.id = 'content';

    this.loginForm = new Form('Username', 'Log In');
    this.loginForm.btnAddClickEvent(() => {
      this.loginForm.username = this.loginForm.input.value;
    });

    this.messageList = new MessageList();
    this.messageList.node.id = 'message-list';

    getMessages()
      .then(data => this.messageList.loadData(data.data));

    this.inputForm = new Form('Message', 'Submit');
    this.inputForm.btnAddClickEvent(() => {
      addMessage(this.loginForm.username, this.inputForm.input.value)
        .then(json => {
          if (json.success === true) {
            this.messageList.emptyList();
            getMessages()
              .then(data => this.messageList.loadData(data.data));
          }
        });
    });

    this.myMessages = new MessageList();
    this.myMessages.node.id = 'my-messages';
    this.myMessages.node.style.display = 'none';

    this.getMyMessages = document.createElement('button');
    this.getMyMessages.textContent = 'My Messages';
    this.getMyMessages.className = 'btn';
    this.getMyMessages.id = 'mm-btn';
    this.getMyMessages.addEventListener('click', () => {
      getUserMessage(this.loginForm.username)
        .then(json => {
          if (json.success === true) {
            this.myMessages.emptyList();
            this.myMessages.loadData(json.messages);
            this.myMessages.node.style.display = 'block';
          }
        }
        );
    });

    setInterval(() => {
      this.messageList.emptyList();
      getMessages()
        .then(data => this.messageList.loadData(data.data));
    }, 5000);

    this.node.appendChild(this.loginForm.getNode());
    this.node.appendChild(this.messageList.getNode());
    this.node.appendChild(this.inputForm.getNode());
    this.node.appendChild(this.getMyMessages);
    this.node.appendChild(this.myMessages.getNode());
  }

  getNode() {
    return this.node;
  }
}