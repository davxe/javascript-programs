function missingElement(a){
    a = a.sort()
    let res = a[0], temp = [],num = 0
    a.forEach(function (ele) {
        if (res == ele) {
            temp.push(ele)
        res++
        }
        else if (res != ele)
        {   num = res
            temp.push(res, ele)
           res = ele +1
        }
    
    })
return num
}
console.log(missingElement([1,2,3,5]))
console.log(missingElement([15,16,18,19]))