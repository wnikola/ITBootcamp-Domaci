const URL = 'https://coetus.herokuapp.com/api/message';

function getMessages() {
  return fetch(`${URL}`)
    .then(res => res.json()
      , error => console.log(error));
}

function addMessage(username, message) {
  return fetch(`${URL}`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'PUT',
    body: JSON.stringify({
      username: username,
      message: message
    })
  })
    .then(res => res.json()
      , error => console.log(error));
}

function getUserMessage(username) {
  return fetch(`${URL}`, {
    headers: { "COntent-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      username: username
    })
  })
    .then(res => res.json()
      , error => console.log(error));
}

export {
  getMessages,
  addMessage,
  getUserMessage
}