
const menuItems=[{id:1,name:'chilly chicken',isVeg:false},
                 {id:2,name:'paneer chilly',isVeg:true},
                 {id:3,name:'veg briyani',isVeg:true},
                 {id:4,name:'mutton briyani',isVeg:false}]
function search(menuItems,term)
{
    const result=menuItems.filter(function(item)
    {
        return item.name.includes(term)
    })
    if(result.length==0)
    {
        return 'we couldnot find any items matching your search. Please try a new keyword'
    }
    else
    {
        return result
    }
}
console.log(search(menuItems,'biscuit'))