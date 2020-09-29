function stringChop(a,b)
{
    let result=[]
    
    for(let i=0;i<a.length;i+=b)
    {
        c=i+b
        result.push(a.slice(i ,c))
    }
    return result
}
 console.log(stringChop('resource',2))
 console.log(stringChop('resourcefd',3))