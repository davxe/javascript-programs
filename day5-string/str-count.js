function strCount(a,b)
{
    let count=0
    for(let i=0;i<a.length;i++)
    {
        if(a[i]==b)
        {
            count++
        }
    }
    return count
}
console.log(strCount("hello","o"))//1