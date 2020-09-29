function Person(name,city,age)
{
    this.name=name
    this.city=city
    this.age=age
    this.details=function()
    {
        return `${this.name} (${this.age}) lives in ${this.city}.`
    }
}
const p1= new Person('rakesh','mumbai',27)
console.log(p1.details())

const p2= new Person('rashmi','bangalore',23)
console.log(p2.details())

const p3= new Person('abhinava','mysore',29)
console.log(p3.details())
