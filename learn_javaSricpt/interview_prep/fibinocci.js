function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (2 >= n) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));
