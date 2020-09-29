function reArrangeArray(a){
    let neg = [], pos = [], result = []
    for (let i = 0; i < a.length; i++){
        if (a[i] >= 0){
            pos.push(a[i])
        }
        else{
            neg.push(a[i])
        }}
    if (pos.length > neg.length){
        result = pos
        for (let i = 0; i < a.length; i += 2){
            result.splice(i,0,neg.shift())
        }}
    else{
        result = neg
        for (let i = 0; i < a.length; i += 2){
            result.splice(i,0,pos.shift())
        }}

    for (let i = 0; i < result.length; i++){
        if (result[i] == undefined){
            result.splice(i,1)
        }}
    return result
}
console.log(reArrangeArray([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]))
console.log(reArrangeArray( [1, 2, 3, -4, -1, 4]))