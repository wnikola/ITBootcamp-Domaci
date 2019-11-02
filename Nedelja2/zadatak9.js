let n = 5;
let m = [];
let left = '';
let right = '';

for (let i = 1; i <= n; i++) {
  m.push(' ');
}

for (let j = n; j > 0; j--) {
  m.shift();
  m.push('#');
  left = m.join(''); // join() creates a new string without changing the original array

  right += '#';

  console.log(`${left} ${right}`);
}

// Bez upotrebe nizova
// for (let i = 1; i <= n; i++) {
//   left = ' '.repeat(n - i) + '#'.repeat(i);

//   right += '#';

//   console.log(`${left} ${right}`);
// }
