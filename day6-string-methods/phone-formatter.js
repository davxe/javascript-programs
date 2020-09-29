function formatter(str)
{
    // let result=`(${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6,10)}`
    // return result
    return '('+str.slice(0,3)+')'+" "+str.slice(3,6)+"-"+str.slice(6,10)

}
console.log(formatter('1234567890'))
