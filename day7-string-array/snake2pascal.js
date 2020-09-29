const str = 'javascript_is_awesome'

function toPascal(str){
    let result = ''
    const words = str.split('_')
    for(let i = 0; i < words.length;i++){
        result= result + words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() 
    }
    return result

}

console.log(toPascal(str))//'JavascriptIsAwesome