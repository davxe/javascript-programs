//using es5

var name='arjun',city='mysore'
var person={
    name:name,
    city:city
}
console.log(person)//{ name: 'arjun', city: 'mysore' }
// es6- concise properties--short hhand properties
//using es6 features of object->if the variable is same as object keys then we use like that

const firstName='john',lastName='mark'
const user={
    firstName,lastName
}
console.log(user)//{ firstName: 'john', lastName: 'mark' }

// es5 features
var student={
    name:'aksay',
    details:function()
    {
        return 'name is '+this.name
    }
}
console.log(student.details())//name is aksay

//using es6 features of method--concise methods
const emp={
    name:'akshay',
    details(){
        return `emp name is ${emp.name}`
    }
}
console.log(emp.details())//emp name is akshay