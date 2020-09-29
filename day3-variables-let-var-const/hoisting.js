//var- hoisted (use the variable before declared in case of var)
console.log(city)//undefined
var city='banglore'
console.log(city)//'banglore'

//let and const - do not get hoisted
//console.log(source)    //ReferenceError: Cannot access 'source' before initialization
let source='bihar'
console.log(source)//bihar
//console.log(destination)    //ReferenceError: Cannot access 'destination' before initialization
const destination='muxz'
console.log(destination)//muxz
