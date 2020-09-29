// function isAlt(word){
//     let vowels = 'aeiouAEIOU'
//     var word =word.toLowerCase()
//     for (let i = 0; i < word.length-1; i++){
//         if (vowels.indexOf(word[i]) >-1) {
//             if (vowels.indexOf(word[i] + 1) > -1) {
//                 return true
//             } else if (vowels.indexOf(word[i + 1]) === -1) {
//                 return true
//             }
//         }
//     }
// return false
// }
function isAlt(a) {
    let vowels = 'aeiou'

    for (let i = 0; i < a.length; i+=2) {
        if (vowels.includes(a[0])) {
            if (!vowels.includes(a[i])) {
                return false
            }
        }
        else {
            if (vowels.includes(a[i])) {
                return false
            }
        }
    }
    for (let i = 1; i < a.length; i += 2) {
        if (vowels.includes(a[i])) {
            if (!vowels.includes(a[i])) {
                return false
            }
        }
        else {
            if (vowels.includes(a[i])) {
                return false
            }
        }
    }
    return true
}
console.log(isAlt('banana'))