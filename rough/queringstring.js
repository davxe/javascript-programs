// function toQueryString(obj) {
// 	if (Object.keys(obj).length === 0) {
// 		return "";
// 	}
	
// 	str = '';
// 	for (let k in obj) {
// 		if (Array.isArray(obj[k])) {
// 			arr = obj[k];
// 			arr.forEach((ele) => {
// 				str += `${k}=${ele}`;
// 				str += "&";
// 			});
// 		} else {
// 			str += `${k}=${obj[k]}&`;
// 		}
// 	}
// 	return str.slice(0,-1);
// }

// console.log(toQueryString({})); 
// console.log(toQueryString({ bar: [2, 3], foo: 1 })); 

// console.log(toQueryString({ name: 'Elie', nums: [1, 2, 3, 4] })); 
function toQueryString(a) {
    let result = ''
    for (const key in a) {
        if (Array.isArray(a[key])) {
            for (let i = 0; i < a[key].length; i++){
                result += '&' + key + '=' + a[key][i]
            }
        } else {
            result += '&' + key + '=' + a[key]
        }
    }
return result.slice(1)
}
console.log(toQueryString({}))
console.log(toQueryString({ 'bar': [2, 3], 'foo': 1 }))