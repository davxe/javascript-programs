//for of->it is a feature of es6 feature .it is used for both strings and array 



const name='javascript'
// for(let i=0;i<name.length;i++)
// {
//     console.log(name[i])
// }
for(const char of name)
{
    console.log(char)
}