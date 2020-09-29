//inside the method if we use function then in this the (this keyword has global object)
const developer={
    name:'rajesh',
    skills:['js','react','node','py'],
    showSkills:function()
    {
       // let x=this.name we also do that forEach() method
        //console.log(this) current object
        this.skills.forEach(function(s)
        {
            //console.log(this) global object
            // console.log(`${x} knows ${s}`)
            console.log(`${this.name} knows ${s}`)
        })
    }
}
developer.showSkills()
/*
The this.name in line 13 returns undefined because in the line 13 this is refered as global object so thats why it return undefned
undefined knows js
undefined knows react
undefined knows node
undefined knows py
*/