const arr1=[10,20,30]
// two way to returning a new array is 1.(using slice(0)      2.(using [].concat()) or 3. using map() method
const arr2=arr1.slice(0)
console.log(arr1,arr2)//[ 10, 20, 30 ] [ 10, 20, 30 ]
arr1.push(40)
console.log(arr1,arr2)//[ 10, 20, 30, 40 ] [ 10, 20, 30 ]

const arr3=arr1.map(function(ele)
{
    return ele
})
const arr4=[].concat(arr2)
console.log(arr4,arr2)//[ 10, 20, 30 ] [ 10, 20, 30 ]
console.log(arr1,arr3)//[ 10, 20, 30 ] [ 10, 20, 30 ]
arr1.push(40)
console.log(arr1,arr2)//[ 10, 20, 30, 40 ] [ 10, 20, 30 ]
arr2.push(50)
console.log(arr1,arr2)//[ 10, 20, 30, 40 ] [ 10, 20, 30, 50 ]