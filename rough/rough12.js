const value='hiii how are you'
// function show(value)
// {
//     const result=value.split('')
//     let output=''
//     for(let i=0;i<result.length;i++)
//     {
//         console.log('i->'+result[i])
//         for(let j=0;j<result[i].length;j++)
//         {
//             console.log('j->'+result[i][j])
//             output+=result[i][j]
//         }    
//     }
//     return output

// }
function show(value)
{
    let output='',i=0
        const intervalId=setInterval(function() 
        {
            output += value.charAt(i++);
            if (i > value.length)
            {
                clearInterval(intervalId);
            } 
                
        }, 10); 
    
    return output

}
console.log(show(value))
