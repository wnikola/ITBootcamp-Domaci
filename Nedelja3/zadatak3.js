function minTriBroja(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return 'Pogresno unet argument';
  } else {
    if (a <= b && a <= c) {
      return a;
    } else if (b <= a && b <= c) {
      return b;
    } else {
      return c;
    }
  }
}

function cenaPicePoCm(cena, poluprecnik) {
  return cena / (poluprecnik ** 2 * 3.14);
}

function najjeftinijaPica(poluprecnik1, cena1, poluprecnik2, cena2, poluprecnik3, cena3) {
  return minTriBroja(cenaPicePoCm(cena1, poluprecnik1), cenaPicePoCm(cena2, poluprecnik2), cenaPicePoCm(cena3, poluprecnik3));
}

console.log(najjeftinijaPica(12, 260, 15, 500, 18, 300));