const aarticle={
    id:1,name:'Javascript',body:'most popular language'
}
const player={}
function obj2Array(obj)
{
    const result=[]
    for(const key in obj)
    {
        result.push([key,obj[key]])
    }
    return result
}
console.log(obj2Array(aarticle))
console.log(obj2Array(player))