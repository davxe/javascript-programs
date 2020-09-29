// create class like features in js, we make use of constructor functions
// constructor function is a blueprint for objects
// define properties and methods

function Player(name, country)
{
    this.name=name
    this.country=country
    this.details=function()
    {
        return `${this.name} plays for ${this.country}`
    }
}
const p1=new Player('sachin','India')
console.log(p1) // Player { name: 'sachin', country: 'India', details: [Function] }
console.log(p1.details())// sachin plays for India

const p2=new Player('rohit','India')
console.log(p2) // Player { name: 'rohit', country: 'India', details: [Function] }
console.log(p2.details()) // rohit plays for India

const p3=new Player('dhoni','India')
console.log(p3) // Player { name: 'dhoni', country: 'India', details: [Function] }
console.log(p3.details()) // dhoni plays for India

const p4=new Player('pointing','Australia')
console.log(p4) // Player { name: 'pointing', country: 'Australia', details: [Function] }
console.log(p4.details()) // pointing plays for Australia