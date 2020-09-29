//${}->it is a string template
// using for loop

const products=[{id:1,name:'marker',price:15},
                {id:2,name:'scale',price:10},
                {id:3,name:'board',price:150}]
console.log('listing products',products.length)
for(let i=0;i<products.length;i++)
{
    console.log(`${products[i].id}.${products[i].name}.INR-${products[i].price}`)
}

//using forEach
console.log('listing products',products.length)
products.forEach(function(ele)
{
    console.log(`${ele.id}${ele.name} INR-${ele.price}`)
})

//using forOf
console.log('listing products',products.length)
for(let ele of products)
{
    console.log(`${ele.id}${ele.name} INR-${ele.price}`)
}