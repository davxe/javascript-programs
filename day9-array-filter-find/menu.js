//applying filter on veg 
const menuItems=[{id:1,name:'chilly chicken',isVeg:false},
                 {id:2,name:'paneer chilly',isVeg:true},
                 {id:3,name:'veg briyani',isVeg:true},
                 {id:4,name:'mutton briyani',isVeg:false}]
function isVeg(menuItems)
{
    const result=menuItems.filter(function(items)
    {
        return  items.isVeg==true
    })
    return result
}
console.log(isVeg(menuItems))