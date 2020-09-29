function balancedArray(a){
    //type code here
        let sum = 0, sum1 = 0
        for (let i = 0; i < a.length; i++)
        {
            if (i < a.length / 2)
            {
                sum+=a[i]
            }
            else
            {
                sum1+=a[i]
            }
        }
        return(Math.abs(sum-sum1))
    }

    console.log(balancedArray([1,2,1,2,1,3]))
    console.log(balancedArray([10,20]))
    console.log(balancedArray([6]))
    console.log(balancedArray([2]))