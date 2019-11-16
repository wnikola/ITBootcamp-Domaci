// Zadatak 1
console.log('Zadatak 1:\n');

let recept1 = {
  ime: 'Spagete u belom sosu',
  tezina: 'Srednji',
  sastojci: ['Spagete', 'Pavlaka za kuvanje', 'Beli luk', 'Curece meso', 'Maslac', 'Jaja', 'Biber', 'So']
};

let recept2 = {
  ime: 'Palacinke sa eurokremom',
  tezina: 'Lak',
  sastojci: ['Brasno', 'Jaja', 'Mleko', 'Ulje', 'So', 'Eurokrem']
}

let recept3 = {
  ime: 'Zapecene makarone',
  tezina: 'Srednji',
  sastojci: ['Makarone', 'Sir', 'Ulje', 'Maslac', 'Kisela pavlaka', 'Mleveni biber', 'So']
}

let recept4 = {
  ime: 'Pomfrit',
  tezina: 'Pocetni',
  sastojci: ['Krompir', 'Ulje', 'So']
}

function ispisiRecept(recept) {
  console.log(`${recept.ime}:\nTezina: ${recept.tezina}\nSastojci: ${recept.sastojci.join(', ')}`);
}

ispisiRecept(recept2);

console.log('\n------------------------\n');

// Zadatak 2
console.log('Zadatak 2:\n')

function ispisiPocetneLake(recepti) {
  recepti.forEach(recept => {
    if (recept.tezina === 'Pocetni' || recept.tezina === 'Lak') {
      console.log(`${recept.ime}\nTezina: ${recept.tezina}\nSastojci: [${recept.sastojci.join(', ')}]\n`);
    }
  });
}

ispisiPocetneLake([recept1, recept2, recept3, recept4]);

console.log('------------------------\n');

// Zadatak 3

let sastojak1 = {
  ime: 'Brasno',
  kolicina: 0.2,
  cena: 70
}

let sastojak2 = {
  ime: 'Jaja',
  kolicina: 2,
  cena: 15
}

let sastojak3 = {
  ime: 'Mleko',
  kolicina: 0.3,
  cena: 80
}

let sastojak4 = {
  ime: 'Ulje',
  kolicina: 0.1,
  cena: 125
}

let sastojak5 = {
  ime: 'So',
  kolicina: 0.01,
  cena: 50
}

let sastojak6 = {
  ime: 'Eurokrem',
  kolicina: 1,
  cena: 170
}

// Zadatak 4

recept2 = {
  ime: 'Palacinke sa eurokremom',
  tezina: 'Lak',
  sastojci: [sastojak1, sastojak2, sastojak3, sastojak4, sastojak5, sastojak6]
}

// Zadatak 5
console.log('Zadatak 5:\n')

recept2.cena = function () {
  let cena = 0;
  this.sastojci.forEach(sastojak => {
    cena += sastojak.kolicina * sastojak.cena;
  });
  return cena;
}

console.log(`Cena palacinki je ${recept2.cena()} dinara.`);

console.log('\n------------------------');