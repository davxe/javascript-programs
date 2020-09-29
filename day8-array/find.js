//10. find()->this is used to find the 1st element in an array.it check for single element 

const numbers=[10,20,30,40,20]
//if we check equality then we use inexOf(30)>=0 or includes(30)            but, if we find the elements based on condition i.e.,first element is greater then 35 then we have two option to solve this problem either in c styled or js styled

//c styled
function findEle(numbers)
{
let result
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]>35)
    {
        result=numbers[i]
        break
    }
}
return result
}
console.log(findEle(numbers))// output is 40

//js styled
function findEleJs(numbers)
{
    const result=numbers.find(function(ele)
    {
        return ele>35
    })
    return result
}
console.log(findEleJs(numbers))// output is 40