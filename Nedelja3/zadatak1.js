function maksTriBroja(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return 'Pogresno unet argument';
  } else {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }
}

console.log(maksTriBroja(5, 2, 5));