//11.  filter()->this is used to find the elements in array.it checks for multiple elements
const numbers=[10,20,30,40,200]
//if we check equality then we use inexOf(30)>=0 or includes(30)            but, if we find the elements based on condition i.e.,first element is greater then 35 then we have two option to solve this problem either in c styled or js styled

//c styled
function findEle(numbers)
{
let result=[]
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]>35)
    {
        result.push(numbers[i])
    }
}
return result
}
console.log(findEle(numbers))// output is [40,200]
console.log(findEle([10,35,46,77,-1,102]))//[ 46, 77, 102 ]
console.log(findEle([10,30]))//[]

//js styled
function findEleJs(numbers)
{
    const result=numbers.filter(function(ele)
    {
        return ele<10
    })
    return result
}
console.log(findEleJs(numbers))// output is [40,200]
console.log(findEleJs([10,35,46,77,-1,102]))//[ 46, 77, 102 ]
console.log(findEleJs([10,30]))//[]
