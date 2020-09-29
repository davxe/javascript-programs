// string method does not modified the original value
const str='javascript'

console.log(str.length)//10

console.log(str.toUpperCase())//JAVASCRIPT

console.log(str.toLowerCase())//'javascript'

console.log(str.indexOf('a'))//1

console.log(str.indexOf('z'))//-1

console.log(str.includes('z'))//false

console.log(str.includes('a'))//true

console.log(str.indexOf('a')>=0)//true->if i want to return boolean then we use check in indexOf

console.log(str.lastIndexOf('a'))//it uses of right to left
//output is 3

console.log(str[1])//a

//charAt()->Returns the character at the specified index.


console.log(str.charAt('s'))//j->because it  implicet convert the string to its index by 0=

console.log(str.charAt(1))//a

//slice()->we can pass one or two arguments were first argument is beginnig index and second argument is upto index.
const name='sachin'

console.log(name.slice(0,3))//'sac'

console.log(name.slice(1))//'achin'

//capitalize a word

console.log(name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase())//we can use this (name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase()) to captalize the first letter of the word 

//split()->it Seperate a string into substrings using the specified separator and return them as an array.

const tech='javascript react node express'
console.log(tech.split())//[ 'javascript', 'react', 'node', 'express' ]