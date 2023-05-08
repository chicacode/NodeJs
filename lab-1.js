const mySum = (...args) => {
  return args.reduce((a, b) => {
    return a + b;
  }, 0);
};

console.log(mySum(3,6,9))