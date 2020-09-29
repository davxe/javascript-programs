let n1=10
let n2=n1
console.log(n1,n2)//10 10

n1=50
console.log(n1,n2)// 50 10

n2=30
console.log(n1,n2)//50 30
let arr1=[10,20]
console.log(arr1)//[ 10, 20 ]
let arr2=arr1
console.log(arr1,arr2)//[ 10, 20 ] [ 10, 20 ]
arr1.push(30)
console.log(arr1,arr2)//[ 10, 20, 30 ] [ 10, 20, 30 ]