const numbers=[10,20,30,40,50]
//using es5 features
const result=numbers.map(function(ele)
{
    return ele+5
})


console.log(result)//[ 15, 25, 35, 45, 55 ]

//using es6 arrow features

const result1=numbers.map((ele)=>
    {
        return ele+5
    })
    console.log(result)//[ 15, 25, 35, 45, 55 ]