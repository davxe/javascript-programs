//1. for()->it passes the inndex of elements in an array. In this we have to initialize,check condition, increment/decrement
const players=['Sachin','Virat','Dhoni']
for(let i=0;i<players.length;i++)
{
    console.log(players[i])
}//output is :-Sachin
//             Virat
//             Dhoni

//2.  forEach()->It is a feature of eS5. It pass the value of an element as an argument in an array. It is a callback function. It take function as an argumnet it call the function for every single element

players.forEach(function(ele)
{
    console.log(ele)
})//output is :-Sachin
//             Virat
//             Dhoni

// using forEach to string the we use first split method

const str='javascript'
str.split('').forEach(function(ele)
{
    console.log(ele)
})/*
j
a
v
a
s
c
r
i
p
t
*/


//3. forOf()->It is a feature of eS6. It is a string and array method It is a callback function. It take function as an argumnet
for(let ele of players)
{
    console.log(ele)
}//output is :-Sachin
//             Virat
//             Dhoni