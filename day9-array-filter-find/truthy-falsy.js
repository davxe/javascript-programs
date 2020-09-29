/* falsy value->{false,0,'',undefined,null,NaN}

truthy value->{true,1,-1,[],{},['prince'],{name:'arjun}}
*/

const values=[false,true,,1,-1,'',[],undefined,{},null,NaN,['pri'],{name:'prince'}]
for(let i=0;i<values.length;i++)
{
    if(values[i])
    {
        console.log(values[i],' -> truthy')
    }
    else
    {
        console.log(values[i],' -> falsy')
    }
}