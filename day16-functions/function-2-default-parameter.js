// //set default parameters value
// function add(n1,n2)
// {
//     //using ternary operator
//     n1=typeof n1=='undefined'?0:n1
//     n2=typeof n2=='undefined'?0:n2
//     /*
//     if(typeof n1=='undefined')
//     {
//         n1=0
//     }
//     else
//     {
//         n1=n1
//     }
//      if(typeof n2=='undefined')
//     {
//         n2=0
//     }
//     else
//     {
//         n2=n2
//     }
//     */
//    console.log(n1,n2)//1.(0,0) 2.(10,0) 3.(10,20)
//    return n1+n2
//  }
// // console.log(add())//0
// // console.log(add(10))//10
// // console.log(add(10,20))//30 

//using es6 feature

function sum(n1=0,n2=0)
{
    console.log(n1,n2)
     return n1+n2
}
let result=sum(10,20)
console.log(result)

// console.log(sum())
// console.log(sum(10))
// console.log(sum(17,25))