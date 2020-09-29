// //Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   function multiplyNumeric(obj)
//   {
//       for(let keys in obj)
//       {
//           if(typeof obj[keys]=='number')
//           {
//               obj[keys]*=2
//           }
//       }
//       return obj
//   }
//   console.log(multiplyNumeric(menu))
// console.log('\u{1F60D}')
// console.log( "z".codePointAt(0) )
let key = []
for(let i=97;i<=122;i++)
{
  key.push(String.fromCodePoint(i))
}
console.log(key)