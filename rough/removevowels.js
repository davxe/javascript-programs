let str='javascript is awesome'
let output=''
const word=str.split('')
const vowels='aeiou'
for(let i=0;i<word.length;i++)
{
    if(!vowels.includes(word[i]))
    {
        output+=word[i]
    }
}
console.log(output)