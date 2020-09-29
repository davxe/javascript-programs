//snakeToCamel means first word's letter is small after that 2nd word's first letter is capital
const str = 'javascript_is_awesome'

function toCamel(str){
    let result = ''
    const words = str.split('_')
    result = result + words[0].toLowerCase()
    for(let i = 1;i < words.length;i++){
        result = result + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }
    return result
}

console.log(toCamel(str))//javascriptIsAwesome