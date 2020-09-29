const article={
    id:1,
    name:'Javascript',
    body:'Javascript is the most populaar language of 2020'
}
console.log(article.name)//javascript
console.log(article['name'])//javascript
const prop='name'
console.log(article.prop)//undefined
console.log(article[prop])//javascript
//we use for-in loop for object

for(const key in article)
{
    console.log(key,article[key])
}/*name 1
name Javascript
name Javascript is the most populaar language of 2020*/