const counter = document.querySelector('#counter');
let orderButtons = document.querySelectorAll('.btn-order');
let orderNowButtons = document.querySelectorAll('.btn-order-now');

let count = 0;
let date = new Date();

orderButtons.forEach(button => button.addEventListener('click', order));

orderNowButtons.forEach(button => button.addEventListener('click', orderNow));

function order() {
  count++;
  counter.innerHTML = count;
}

function orderNow() {
  if (count === 0) {
    alert(`Broj pica ne moze biti nula.`);
  } else {
    alert(`Narucili ste ${count} pica. [${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`);
    count = 0;
    counter.innerHTML = count;
  }
}