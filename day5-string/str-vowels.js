function countVowels(str)
{
    let count=0,i
    const vowels='aeiouAEIOU'
    for(i=0;i<str.length;i++)
    {
        if(vowels.includes(str[i]))
        {
            count++
        }
    }
    return count
}
console.log(countVowels("bangalore"))//4
console.log(countVowels("dct"))