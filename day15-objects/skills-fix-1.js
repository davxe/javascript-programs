const developer={
    name:'rajesh',
    skills:['js','react','node','py'],
    showSkills:function()
    {
        //using for loop method
       for(let i=0;i<this.skills.length;i++)
       {
           
        console.log( `${this.name} knows ${this.skills[i]}`)
       }
       //using for of loop method
    // for(const skill of this.skills)
    // {
    //     console.log(`${this.name} knows ${skill}`)
    // }
    }

}
developer.showSkills()