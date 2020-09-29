const developer={
    name:'rajesh',
    skills:['js','react','node','py'],
    showSkills:function()
    {
        //using forEach() method
        //this=current object
        //assign value of this to another variable,use that variable inside the function instead of the this keyword
      let x=this
        this.skills.forEach(function(s)
        {
            //lexical scoping
             console.log(`${x.name} knows ${s}`)
            //console.log(`${this.name} knows ${s}`)
        })
    }
}
developer.showSkills()
/*
rajesh knows js
rajesh knows react
rajesh knows node
rajesh knows py
*/