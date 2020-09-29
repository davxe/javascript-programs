const show={
    name:'arjun'
}
const developer={
    name:'rajesh',
    skills:['js','react','node','py'],
    showSkills:function()
    {
        //using forEach() method
        //this=current object
        //assign value of this to another variable,use that variable inside the function instead of the this keyword
     // let x=this
        this.skills.forEach(s =>   console.log(`${show.name} knows ${s}`))
        
            //lexical scoping
          
            //console.log(`${this.name} knows ${s}`)
        
    }
}
developer.showSkills()