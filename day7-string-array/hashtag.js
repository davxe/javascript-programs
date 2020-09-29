const str = 'javascript is awesome'

function hashTag(str){
    result = '#'
    const words = str.split(' ')
    for(let i =0; i < words.length;i++){
        result =result + words[i].slice(0,1).toUpperCase() + words[i].slice(1).toLowerCase() 
    }
    return result

}

console.log(hashTag(str))//'#JavascriptIsAwesome'