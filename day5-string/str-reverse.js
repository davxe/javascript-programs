function strReverse(str)
{
    let result="",i
    // for(i=str.length-1;i>=0;i--)
    // {
    //     result=result+str[i]
    // }
    for(i=0;i<str.length;i++)
    {
        result=str[i]+result
    }
     return result
}
console.log(strReverse("dct"))
/*
result=name[0]+result
and other method is 
*/