const str='javascript'
function findEachVowel(str)
{
   const vowels='aeiou'
    const result={a:0,e:0,i:0,o:0,u:0}
    /*const result={}
    for(const char of vowels)
    {
        result[char]=0
    }*/
    for(const char of str)
    {
        if(vowels.includes(char))
        // if(result.hasOwnProperty(char))
        {
            result[char]+=1
        }
    }
    return result
}
console.log(findEachVowel(str))//{ a: 2, e: 0, i: 1, o: 0, u: 0 }