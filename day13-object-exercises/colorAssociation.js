function colorAssociation(a)
{
    let result=[]
   a.forEach(function(ele)
    { 
         const obj={}
    obj[ele[0]]=ele[1]
    result.push(obj)
        
    })
    return result
}
console.log(colorAssociation([['white','goodness'],['blue','tranquility']]))