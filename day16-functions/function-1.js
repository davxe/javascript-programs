function add(n1,n2)
{
    console.log(n1,n2)//undefined undefined
    console.log(n1,n2)//10 undefined
    console.log(n1,n2)//10 30
    return n1+n2
}
//if we pass less argument, parameters will hold undefined
console.log(add())//NaN
console.log(add('jhg'))//NaN
//when we pass more arguments, extra arguments are just ignored
console.log(add(10,30,50))//40