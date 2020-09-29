const person={
    firstName:'sachin',
    lastName:"tendulkar",
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    greet:function()
    {
        return `my name is ${this.firstName}`
    },
    sayHi:function(str)
    {
        return `hi ${str}, my name is ${this.firstName}`
    }
}
console.log(person.fullName())
console.log(person.greet())
console.log(person.sayHi('mani'))