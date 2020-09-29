const emp={
    id:1,name:'rakesh',department:'tech',
    details:function()
    {
        //this refer to current object i.e., it refers to whole (emp)
        return `${this.id},${this.name.toUpperCase()},${this.department}`
    }
}
console.log(emp.details())