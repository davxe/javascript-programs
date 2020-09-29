const name='dct academy'
//it tells the length of the string from index 0 onwards
console.log(name.length)//11
console.log(name[0])//d
console.log(name[name.length-1])//y
console.log(name[name.length])//undefined


//for looping in string

for(let i=0;i<name.length;i++)
{
    console.log(i,name[i])
}