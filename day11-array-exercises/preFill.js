function preFill(len,value)
{
    const result=[]
    for(let i=0;i<len;i++)
    {
        result.push(value)
    }
    return result
}
console.log(preFill(5,2))