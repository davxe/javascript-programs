const counter={
    count:0,
    getCount:function()
    {
        return this.count
    },
    up:function()
    {
        return this.count+=1
    },
    down:function()
    {
        return this.count-=1
    },
    reset:function()
    {
        return this.count=0
    },
    incrementBy:function(a)
    {
        return this.count+=a
    },

    


}
console.log(counter.count)//0
console.log(counter.getCount())//0
console.log(counter.up())//1
console.log(counter.down())//0
console.log(counter.reset())//0
console.log(counter.incrementBy(5))//5
console.log(counter.getCount())//5
