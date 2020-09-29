const cart=[{id:1,name:'marker',price:10,quantity:1}]
function add2Cart(cart,product)
{
    const item=cart.find(function(lineItem)
    {
        return lineItem.id==product.id
    })
    if(item)
    {
        item.quantity+=product.quantity
    }
    else
    {
        cart.push(product)
    }
    return cart
}
console.log(add2Cart(cart,{id:1,name:'marker',price:10,quantity:2}))
console.log(add2Cart(cart,{id:2,name:'scale',price:5,quantity:1}))