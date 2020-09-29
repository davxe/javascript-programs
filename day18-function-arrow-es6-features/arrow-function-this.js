console.log(this)//it return empty object {}

const es5function= function()
{
    console.log(this)// it return global objects
}
// console.log(es5function())
//inside arrow fnction, the value of this, will always be the value of this in the outer scope

const es6function=()=>{
    console.log(this)//  it depends on the outer scope of the function.{}
}
console.log(es6function())

const person={
    name:'arjun',
    skills:['js','react','node'],
    details: function(){
        // console.log(this)?
        this.skills.forEach((s)=>console.log(`${this.name} knows ${s}`))
    }
}
console.log(person.details())/*arjun knows js
arjun knows react
arjun knows node*/
// donot use methods to be arrow functions
console.log(this)
const stu={
    name:'ravi',
    details: function(){
        console.log(this)//{}
    }
}

