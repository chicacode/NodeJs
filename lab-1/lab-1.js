const { mySum } = require('./myFunctions');

console.log(mySum(10,50,90))
console.log(mySum(2,4,6))


let myArr = [3,4,5,6,7,8,9];

let mySecondArr = myArr.map((element) =>{
    return element * 2;
})

console.log(myArr.length)

let result = mySum(...myArr)
console.log("myArr result", result )

console.log(mySecondArr)

const average = mySecondArr.reduce((a, b) => a + b, 0) / mySecondArr.length

console.log("average", average)
let arrayFiltered = mySecondArr.filter((ele) => {
    if(ele > average){
        console.log(ele);
        return true;
    }
})

console.log('arrayFiltered', arrayFiltered);

const sayingGoodByeFn = () =>{
    return console.log('Good bye')
}
setTimeout(sayingGoodByeFn, 3000)

const Employee = {
    name: "Geri",
    email: "Geri@email.com",
    department: "Engineering",
    startDate: "2023-10-10"
}

const { name, email } = Employee;

const Person = {
    name,
    email
}

console.log("Person: ", Person)