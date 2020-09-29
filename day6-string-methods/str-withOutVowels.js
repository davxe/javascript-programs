function withOutVowels(str)
{
    let vowels='aeiou'
    let result=''
    for(let i=0;i<str.length;i++)
    {
        // if(vowels.includes(str[i]))
        // {
        //     true
        // }
        // else
        // {
        //     result=result+str[i]
        // }
        //other method of if
        if(!vowels.includes(str[i]))//it only execute when the condition is true
        {
            result=result+str[i]
        }
    }
    return result
}
console.log(withOutVowels('javascript'))