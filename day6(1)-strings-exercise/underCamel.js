function underToCamel(str)
{
    let result1='' 
    let result=str.split('_')
    for(let i=0;i<result.length;i++)
    {
        result1+=`${result[i].charAt(0).toUpperCase()}${result[i].slice(1).toLowerCase()}`
    }
    return result1
}
console.log(underToCamel("First_name"))
console.log(underToCamel("make_in_inDia"))