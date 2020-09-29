//outside fn the value of this keyword is empty object
//inside fn the value of this keyword is global object
//inside the method the value of this is current object
console.log(this)//{} empty object
function showThis()
{
    console.log(this)

}
console.log(showThis())//global object
const person={
    name:'arjun',
    thisValue:function()
    {
        return this
    }
}
console.log(person.thisValue())//current object

function alterThis()
{
    console.log(this)//
}
console.log(alterThis.bind({name:'prince'})())