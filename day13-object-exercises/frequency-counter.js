const str='ddcttadc'

function frequency(str)
{
    const result={}
    for(const char of str)
    {
        if(result.hasOwnProperty(char))
        {
            result[char]+=1
        }
        else
        {
            result[char]=1
        }
    }
    return result
}
console.log(frequency(str))//{ d: 3, c: 2, t: 2, a: 1 }
/*
in this program we use forOf loop in which we check if result.hasOwnProperty(char)) is true then we add that character into result(result[char]+=1)
else means if the result.hasOwnProperty(char)) is false
then we add result[char]=1

here hasOwnProperty means->it Determines whether an object has a property with the specified name.

*/