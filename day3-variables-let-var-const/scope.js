//var -function scope- life of a variable is across the entire function we cannot access variable outside the function
function display()
{
    console.log(msg)//undefined
    if(true)
    {
        var msg='hi there'
        return msg
    }
}
console.log(display())

//let and const -block scoped means let and const only work within a block i.e.,{}->(only work within this bracket)

function print()
{
    let msg
    if(true)
    {
        msg='hello there'

    }
    return msg
}
console.log(print())