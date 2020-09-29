//for key-> we use only key
//for values->we use key[value]
const article={
    id:1,title:'Javascript',
    body:'most popular language'
}
function getKeys(obj)
{
    let result=[]
    for(const key in obj)
    {
        result.push(key)
    }
    return result
}
console.log(getKeys(article))// [ 'id' ], [ 'title' ], [ 'body' ] 

function getValues(obj)
{
    let result=[]
    for(const key in obj)
    {
        result.push(obj[key])
    }
    return result
}
console.log(getValues(article))// [ 1 ], [ 'Javascript' ], [ 'most popular language' ] 