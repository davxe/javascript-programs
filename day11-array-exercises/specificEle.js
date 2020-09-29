function specificEle(arr,name)
{
    result=[]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==name)
        {
            result.push(arr.splice(i,1))

        }
    }
    return result
}
console.log(specificEle(['apple','berry','banana','mango','kiwi'],'mango'))