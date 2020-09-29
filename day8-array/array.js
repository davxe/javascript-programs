const players=['Sachin','Virat','Dhoni','kohli','rohit']

//1.  push()->is used to add the element in the end

players.push('Yuvraj','Rahul','Ashwin')

console.log(players)//['Sachin', 'Virat', 'Dhoni', 'Yuvraj', 'Rahul', 'Ashwin' ]

//2.  splice()->it is used to add or delete the element in the array.Its return type is array

console.log(players.splice(2,2))//[ 'Dhoni',''kohli ]

console.log(players)//[ 'Sachin', 'Virat', 'Yuvraj', 'Rahul', 'Ashwin' ]

console.log(players.splice(2,0,'Irfan'))//[]

console.log(players)//[ 'Sachin', 'Virat', 'Irfan', 'Yuvraj', 'Rahul', 'Ashwin' ]

//3.  Include()->It is used to check whether the element is present in array or not it return true or false

const fruits=['apple','mango','kiwi','watermelon']

console.log(fruits.includes('mango'))//true

console.log(fruits.includes('strawberry'))//false

//4.  indexOf()->it is used to identify that where the element are present in the array.it return the index of the element. it always go to left to right if we want to use the last same element then we use [lastIndexOf()] they can go from rigth to left . if the element is not present then it return -1
console.log(fruits.indexOf('kiwi'))//2
console.log(fruits.indexOf('strawberry'))//-1 [because the element are not present in array so it return -1] 
const numbers=[1,2,3,10,20,30,40,20]
console.log(numbers.indexOf(10))// it returns 3
console.log(numbers.indexOf(20))// it returns 4
console.log(numbers.lastIndexOf(20))// it returns 7

//5.  slice()->it takes 2 argument where first indicates where to start in array and 2nd indicates from where we have to print the elemnets in array. if we give single argument then it print the all element from the given argument as a index
console.log(fruits.slice(0,2))//[ 'apple', 'mango' ]
console.log(fruits.slice(2,3))//[ 'kiwi' ]
console.log(fruits.slice(1))//[ 'mango', 'kiwi', 'watermelon' ]
console.log(fruits.slice(2,2))//[]

//6.  split()->it is used to convert the string to array. Its return type is array
const str='javascript'
console.log (str.split())//['javascript']

//7.  join()->it is used to convert the array to string. Its return type is string
console.log(fruits.join())//apple,mango,kiwi,watermelon

//8.  sort()->it is used to sort an array in ascending order
console.log(players.sort())//[ 'Ashwin', 'Irfan', 'Rahul', 'Sachin', 'Virat', 'Yuvraj' ]
console.log(players)//[ 'Ashwin', 'Irfan', 'Rahul', 'Sachin', 'Virat', 'Yuvraj' ]
console.log(numbers.sort())//[ 10, 20, 20, 30, 40 ]

//9.  reverse()->it is used to reverse the element in array in descending order
console.log(numbers.reverse())//[ 40, 30, 20, 20, 10 ]

//Note:-in both sort() and reverse() when we use these methods then our elements position are changed