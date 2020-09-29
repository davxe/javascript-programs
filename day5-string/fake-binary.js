//wap if no is greater than equal to 5 then return 1 else return 0
function fakeBinary(num)
{
    let result=""
    for(let i=0;i<num.length;i++)
    {
        if(num[i]>=5)
        {
            result+= '1'
        }
        else
        {
            result+='0'
        }
    }
    return result
}
console.log(fakeBinary('263391'))//'010010'
console.log(fakeBinary('989751234'))//'111110000'