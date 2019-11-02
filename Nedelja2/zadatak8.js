let n = 5;
let m = [];
let o = '';

for (let i = 1; i <= n; i++) {
  m.push(' ');
}

for (let j = n; j > 0; j--) {
  m.shift();
  m.push('#');
  o = m.join(''); // join() creates a new string without changing the original array
  console.log(o);
}
