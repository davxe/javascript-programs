// another way of function declaration

const city='bangalore'

//function expressions donot get hoisted
//console.log(sum(15,25))

// when u assign a function as a value to a variable, we call it is as function expression
//we can pass functions as arguments to other functions
// function-expression is also known as annonomous function because it has no function name
const sum=function(n1,n2)
{
    /* 
    it is as same as function declaration as we do before this 
    it has arguments
    it has default parameters via es5,es6
    in this also parameters has local variable as of function declaration
    in this also if parameter has less arguments then it gives undefined,if arguments are more then it is ignored

    */
    return n1+n2
}
console.log(sum)//[Function: sum]
console.log(sum(10,20))//30
console.log(sum())//NaN