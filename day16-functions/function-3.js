//function declaration get hoisted if we print the functon before declaring it

console.log(add(10,20))
function add(n1,n2)
{
    return n1+n2
}