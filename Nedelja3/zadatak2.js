function cenaPicePoCm(cena, poluprecnik) {
  return cena / (poluprecnik ** 2 * 3.14);
}

console.log(cenaPicePoCm(120, 16));