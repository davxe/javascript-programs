//ordered,integer indexed,collection of values
const p1 = 'sachin', p2 = 'sehwag', p3 = 'rahul', p4 = 'virat'
console.log(p1)//'sachin'

const player = ['sachin','sehwag','rahul','virat']//new Array('sachin','sehwag','rahul','virat')
console.log(player[0])//'sachin'

console.log(player)//[ 'sachin', 'sehwag', 'rahul', 'virat' ]


const fruits = ['apple' ,'mango','kiwi','watermelon']
console.log(typeof fruits)// 'object'
//properties & methods 
console.log(fruits.length)//4

//methods
//mutable methods --that changes the original array
//adds an element/s to the end of the array
console.log(player.push('dhoni'))//5
console.log(player)//[ 'sachin', 'sehwag', 'rahul', 'virat', 'dhoni' ]


//adds element/s to the beginning of the array
console.log(player.unshift('shikar'))
console.log(player)//[ 'shikar', 'sachin', 'sehwag', 'rahul', 'virat', 'dhoni' ]


//remove element from the end of the array 
console.log(player.pop())//'virat'
console.log(player)//[ 'shikar', 'sachin', 'sehwag', 'rahul', 'virat' ]


//remove element from beginning of the array
console.log(player.shift())//'shikar'
console.log(player)//[ 'sachin', 'sehwag', 'rahul', 'virat' ]
