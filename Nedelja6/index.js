const loginBtn = document.querySelector('#login');
const userTxt = document.querySelector('#username');
const passTxt = document.querySelector('#password');
const usrErr = document.querySelector('#usr-err');

loginBtn.addEventListener('click', () => {
  if (/^[0-9]/.test(userTxt.value) === true) return usrErr.style.display = 'block';

  fetch('./korisnici.json')
    .then(res => res.json())
    .then(data => {
      if (data.find(el => el.username === userTxt.value) === undefined) {
        alert('User not found');
        usrErr.style.display = 'none';
        return;
      };
      data.forEach(el => {
        if (el.username === userTxt.value && el.password === passTxt.value) {
          alert('Logged in');
          userTxt.value = '';
          passTxt.value = '';
        } else if (el.username === userTxt.value && el.password !== passTxt.value) {
          alert('Wrong password');
        }
      });
      usrErr.style.display = 'none';
    });
});

// JSON fajl sa korisnicima bi nam bio na backend-u (tj. verovatno bismo imali bazu podataka)
// Na backend-u bi postojao API na koji bismo podatke iz forme poslali pomocu HTTP POST zahteva
// Backend bi vrsio proveru podataka na osnovu koje bi nam vratio true/false