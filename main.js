const sum = (num1,num2) => num1+num2
const sub = (num1, num2) => num1-num2
const divide = (num1,num2)=> num1/num2
const mul = (num1,num2) => num1 * num2


const calculate = function (num1, num2 , operation){
    alert(operation(num1,num2))
}
