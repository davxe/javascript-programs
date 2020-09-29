//variable is used to store values inside a program
var city
console.log(city)// by default the value of city is un defined

let state
console.log(state)// by default the value of state is un defined 

//const location
//console.log(location)//SyntaxError: Missing initializer in const declaration
const customerName='prince'
const productName='marker'
const price=15
const temp=23.45
console.log(price, temp)//number
console.log(typeof city)//undefined
console.log(typeof customerName)//string
console.log(typeof price)//number
console.log(typeof temp)//number
console.log(typeof typeof price)//string
const fruits=['mango','kiwi','sapota']
console.log(fruits)//[ 'mango', 'kiwi', 'sapota' ]
console.log(typeof fruits)//object-(because in javascript an array is treated as an objects
const person={
    name:'prince',
    city:'vaishali'
}
console.log(typeof person)//object
console.log(person)//{ name: 'prince', city: 'vaishali' }
console.log(Array.isArray(fruits))//true
console.log(Array.isArray(person))//false
const allowAccess=true
console.log(typeof allowAccess)//boolean
const details = function()
{
    return ('hi there ')
}
console.log(details)//[Function: details]
console.log(details())// hi there 
console.log(typeof details)//function
