//for converting array to object we use the index of the element of array
const arr=[
    ['id',1],['title','Javascript'],
    ['body','most popular language']
]
function arr2Obj(arr)
{
    const result={}
    arr.forEach(function(ele){
        console.log(ele)
        result[ele[0]]=ele[1]
        console.log(result)
    });
    return result
}
console.log(arr2Obj(arr))