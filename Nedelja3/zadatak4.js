function divisibleByFive(arr) {
  arr.forEach(element => {
    if (element % 5 === 0) {
      console.log(element);
    }
  });

  // ili sa filter():
  // console.log(...arr.filter(num => num % 5 === 0));
}

divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5]);