// all primitives are pass by value
//by default parameter are let type
const fruit='mango'
function changeFruit(fruit)
{
    console.log("inside function before re assign-> ",fruit)//'mango'
    fruit='kiwi'
    console.log("inside function after re assign-> ",fruit)//'kiwi'
    return fruit
}
// console.log("before function call-> ",fruit)////'mango'
console.log(changeFruit(fruit))////'kiwi'
console.log("after function call-> ",fruit)//'mango'