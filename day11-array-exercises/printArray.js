let arr=[[1,2],[8,11]]
function printArray(arr)
{
   /* for(let i=0;i<arr.length;i++)
    {
        console.log('row'+i)
        for(let j=0;j<arr[i].length;j++)
        {
            console.log(arr[i][j])
        }
    }*/
       arr.forEach(function(ele,i)
    {
        console.log("row",i)
        ele.forEach(function (letter)
        {
            console.log(letter)
            
        })
    })
}
console.log(printArray(arr))