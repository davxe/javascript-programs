// function highestScoringWord(a) {
//   let alphabets= 'abcdefghijklmnopqrstuvwxyz'
//   let arr = a.split(' ')
//  // console.log(arr)
//   let highScore = 0
//   let highWord =''
//   arr.forEach(function (ele, i) {
//       let temp = 0
//       for (const char of ele) {
//           temp = temp + alphabets.indexOf(char) + 1
          

//       }

//       if (temp > highScore) {
          
//           highScore = temp
//           highWord  = ele
          
//       }

      
//   })
//   return highWord

// }
function highestScoringWord(a)
{
    let alphabet = []
    for (let i = 97; i <= 122; i++)
    {
        alphabet.push(String.fromCodePoint(i))
    }
    let result = '', score = 0
    let words = a.split(" ")
    for (let j = 0; j < words.length; j++)
    {
        let letter = words[j]
        let sum=0
        for (let k = 0; k < letter.length; k++)
        {
            let char = letter[k]
            sum+=(alphabet.indexOf(char)+1)
        }
        if (sum > score)
        {
            score = sum
            result=letter
        }
    }
    return result
}
console.log(highestScoringWord("man i need a taxi up to ubud"));
console.log(highestScoringWord("a b c d e f")); // "f"

console.log(highestScoringWord("hello world")); // "world"

console.log(highestScoringWord("go ahead make my day")); // "my"

console.log(highestScoringWord("there is no place like home")); // "there"

console.log(highestScoringWord("aaaaaa bbb cc f")); // "aaaaaa"

console.log(highestScoringWord("bbb cc f aaaaaa")); // "bbb"

console.log(highestScoringWord("this sentence has two highest scoring words")); // "sentence"