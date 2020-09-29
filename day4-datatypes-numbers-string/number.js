const price=125, temperature=24.6

console.log(typeof price)// 'number'
console.log(typeof temperature)//'number'

console.log(Math.round(temperature))//25
console.log(temperature)//26.6
console.log(Math.PI)//3.141592653589793

console.log(Math.sqrt(3))

const n1=12.2,n2=17.8
console.log(Math.round(n1))//12
console.log(Math.ceil(n1))//13
console.log(Math.round(n2))//18
console.log(Math.floor(n2))//17
console.log(Math.min(10,5,2,-1,10))//-1
console.log(Math.max(-1,-25,-78,-89,-1000))//-1
console.log(Math.min[10,20,30])//undefined
console.log(Math.min([10,20,30]))//NaN->Not a Number
console.log(typeof NaN)//'number'
console.log(5*'3')//15
console.log(5*'a')//NaN
