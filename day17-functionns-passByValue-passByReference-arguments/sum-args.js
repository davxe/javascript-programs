function add()
{
    let sum=0
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i]
    }
    return sum
}
console.log(add(10,20))
console.log(add(10,20,30))
console.log(add(10,20,40,30,50,60,70,80,90,110,100,120,130,140,150))
//this is a concept of overloading->function with same name, able to handle multiple number of arguments