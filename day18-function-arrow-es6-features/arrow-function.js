//arrow function is a feature of es6 features
//it can be done with function expression and anonymous function
//

// using es5 function
const sum=function(n1,n2)
{
    return n1+n2
}
console.log(sum(10,20))//30

// using es6 function expression with arrow function
const sum1=(n1,n2)=>{
    return n1+n2
}
console.log(sum1(10,20))//30

const numbers=[10,15,20,25,30]
// using filter method with es5 function
const result=numbers.filter(function(ele)
{
    return ele%2==0
})
console.log(result)//[ 10, 20, 30 ]

// using filter with es6 arrow function

const result1=numbers.filter(ele =>
{
    return ele%2==0
})
console.log(result1)//[ 10, 20, 30 ]

/*
filter with es6 arrow function
if only 1 arguments passed- then () round bracket will optional
if there is only one statement to be executed -then {} flower bracket is optional, return key is optional and the statement to be written next to =>
*/


const result2=numbers.filter(ele => ele%2==0)
console.log(result2)//[ 10, 20, 30 ]

const result3=numbers.forEach((ele,i) =>console.log(i,ele))