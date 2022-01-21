const account = {
  owner: "Jones",
  movements: [2, 4, 5, 224, 5, 55, 666],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
console.log((account.latest = 50));
console.log(account);

// can also be implemented with classes
