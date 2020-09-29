const arr=["AwesomE","ThIngs","hAppEning","HerE"]
function totalCaps(arr)
{
    let count=0
    //using for loop
    
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
           if(arr[i][j]==arr[i][j].toUpperCase())
           {
               count++
           }
        }
    }
    /*for(const char of arr)
    {
        for(const letter of char)
        {
            console.log("row"+letter)
            if(letter==letter.toUpperCase())
            {
                count++
            }
        }
    }*/
    return count
}
console.log(totalCaps(arr))

