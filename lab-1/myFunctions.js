const mySum = (...args) => {
  console.log("External file")
  return args.reduce((a, b) => {
    return a + b;
  }, 0);
};

console.log(mySum(3,6,9))

module.exports = {
  mySum
};