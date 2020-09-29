//es5 features
var person={
    name:'rakesh',
    city:'tumkur'
}
var name=person.name, city=person.city
console.log(name ,city)//rakesh tumkur

// using es6 features--object destructuring

const user={
    firstName:'anu',
    email:'anu@gmail.com'
}
// if we give extra values then it gives undefined
const{ firstName, email, password }=user
console.log(user)//anu anu@gmail.com