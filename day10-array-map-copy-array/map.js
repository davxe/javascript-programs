const numbers=[10,15,20,25]
//c styled
function add2(numbers)
{
    const result=[]
    for(let i=0;i<numbers.length;i++)
    {
        result.push(numbers[i]+2)
    }
    return result
}
console.log(add2(numbers))//[ 12, 17, 22, 27 ]
console.log(numbers)//[ 10, 15, 20, 25 ]
//js styled

function add2Js(numbers)
{
    const result=numbers.map(function(ele)
    {
        return ele+2
    })
    return result
}
console.log(add2Js(numbers))//[ 12, 17, 22, 27 ]