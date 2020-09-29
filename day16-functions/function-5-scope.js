//function scope
//any vaiable declared outside the function, become a global variable

const city='bangalore'
function showCity()
{
    const city='mysore'
    console.log(city)
    // console.log(emp)
    //reference error, as emp is not defined
}
showCity()
console.log(city)       