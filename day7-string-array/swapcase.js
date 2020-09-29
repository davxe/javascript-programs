const str = 'JaVaScRIpt'

function swapCase(str){
    let result = ''
    for(let i = 0; i < str.length;i++){
        if(str[i] == str[i].toUpperCase()){
            result = result + str[i].toLowerCase()
        }
        else {
            result = result + str[i].toUpperCase()
        }
    }
    return result
}

console.log(swapCase(str))