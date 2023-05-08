const { mySum } = require('./myFunctions');

console.log(mySum(10,50,90))
console.log(mySum(2,4,6))


let myArr = [3,4,5,6,7,8,9];

let mySecondArr = myArr.map((element) =>{
    return element * 2;
})

console.log(myArr.length)

console.log("myArr", mySum(...myArr))

console.log(mySecondArr)