function strVowels(str)
{
    // let count=0
    // for(let i=0;i<str.length;i++)
    // {
    //     if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U')
    //     {
    //         count++
    //     }
    // }
    //other method
    // let vowels='aeiou'
    // let count=0
    // for(let i=0;i<str.length;i++)
    // {
    //     if(vowels.includes(str[i]))
    //     {
    //         count++
    //     }
    // }
    // return count
    //another method
    let vowels='aeiou'
    let count=0
    for(let i=0;i<str.length;i++)
    {
        if(vowels.indexOf(str[i])>=0)
        {
            count++
        }
    }
    return count
}
console.log(strVowels('javascript'))