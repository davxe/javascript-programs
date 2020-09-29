// all objects are pass by reference
const person={
    name:'Prince',
    city:'bihar'
}
function changeInfo(person)
{
    console.log(person)//{ name: 'Prince', city: 'bihar' }
    person.city='bangalore'
    console.log(person)//{ name: 'Prince', city: 'bangalore' }
    return person
}
console.log(person)//{ name: 'Prince', city: 'bihar' }
console.log(changeInfo(person))//{ name: 'Prince', city: 'bangalore' }

console.log(person)//{ name: 'Prince', city: 'bangalore' }