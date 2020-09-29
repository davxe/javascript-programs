const salaries={
    john:1000,
    smith:2000,
    rahul:3000,
}
function sumSalaries(obj)
{
    let result=0
    for(let keys in obj)
    {
        result+=obj[keys]
    }
    return result
}
console.log(sumSalaries(salaries))