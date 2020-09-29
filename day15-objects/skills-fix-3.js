const developer={
    name:'rajesh',
    skills:['js','react','node','py'],
    showSkills:function()
    {
        this.skills.forEach(function(s)
        {
            console.log(`${this.name} knows ${s}`)
        }.bind(this))//the argument passed to the bind method is (object) will now become the value of this keyword inside the function
        //bind method is used to convert the value of this(global object) to this(current object)
    }
}
developer.showSkills()
/*
rajesh knows js
rajesh knows react
rajesh knows node
rajesh knows py
*/