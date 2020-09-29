function stringIndexOf(a,b)
{
    let result=''
    for(let i=0;i<a.length;i++)
    {
        if(a[i]==b)
        {
            result=i
            break
        }
        else
        {
            result= -1
        }
    }
    return result
}
console.log(stringIndexOf('awesome','z'))