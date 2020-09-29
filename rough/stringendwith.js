function squareDigits(num){
    //may the code be with you
    
    const arr=num.toString().split('')
    console.log(arr)
    const result=arr.map(ele=>{
      return ele*ele
    }) 
    console.log(result)
    let output=result.join('')
    console.log(output)
    return Number(output)
  }
  console.log(squareDigits(9119))