function maksTriBroja(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return 'Pogresno unet argument';
  } else {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else if (c > a && c > b) {
      return c;
    } else {
      return 'Brojevi su jednaki';
    }
  }
}

console.log(maksTriBroja(5, 2, 3));