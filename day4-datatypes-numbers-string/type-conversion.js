//string to number
let n1='100',n2='115.7',n3='a'
console.log(typeof n1)//string
console.log(n1)//100
console.log(n1+10)//10010
console.log(parseInt(n1))//100  
console.log(parseInt(n1)+10)//110
console.log(typeof parseInt(n1))//'number'

console.log(parseFloat(n2))//115.7

console.log(parseInt(n3))//NaN

//number to string

const n4=25
console.log(String(n4))//'25'
console.log(""+n4)//'25'
