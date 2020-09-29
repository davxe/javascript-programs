function pal(a)
{
    let result=''
    
    let bool=0
    for(let i=0;i<a.length;i++)
    {
        for(let j=a.length-1;j>0;j--)
        {
        if(a[i]==a[j])
            {
               bool=1
               break
                
            }
        }   
    }
    if(bool==1)
    {
        return 'palin'
    }
    //return result
    else
    {
        return 'not'
    }
}
console.log(pal('mam'))