function filterValues(value)
{
    /*
    const result=[]
    for(let i=0;i<value.length;i++)
    {
        if(value[i])
        {
            result.push(value[i])
        }
    }*/
    const result1=value.filter(function(ele){
        return ele
    })
    return result1 
}
console.log(filterValues([58,"",'abcd',true,null,false,0]))