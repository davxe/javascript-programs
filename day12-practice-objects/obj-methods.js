const employee={
    id:1,name:'mani',gender:'male'
}
//1.read properties from an object
console.log(employee.name)//mani
console.log(employee['name'])//mani
console.log(employee.salary)//undefined

console.log(employee)//{ id: 1, name: 'mani', gender: 'male' }
//2.add property to an object
employee.email='abc@gmail.com'
console.log(employee)//{ id: 1, name: 'mani', gender: 'male', email: 'abc@gmail.com' }
employee['salary']=65000
console.log(employee)/*{
                             id: 1,
                             name: 'mani',
                             gender: 'male',
                             email: 'abc@gmail.com',
                             salary: 65000  
                        }*/
//3.update property
employee.email='bcd@gmail.com'
console.log(employee)/*{
                            id: 1,
                            name: 'mani',
                            gender: 'male',
                            email: 'bcd@gmail.com',
                            salary: 65000
                        }*/
//4. delete property
delete employee.gender
console.log(employee)//{ id: 1, name: 'mani', email: 'bcd@gmail.com', salary: 65000 }
//show all keys
console.log(Object.keys(employee))//[ 'id', 'name', 'email', 'salary' ]
//show all values
console.log(Object.values(employee))//[ 1, 'mani', 'bcd@gmail.com', 65000 ]
// total key value pair length
console.log(employee.length)//undefined
console.log(Object.keys(employee).length)//4
console.log(Object.values(employee).length)//4
//know if a key or property is present or not
console.log(employee.hasOwnProperty('salary'))//true
console.log(employee.hasOwnProperty('age'))//false
console.log(Object.keys(employee).includes('age'))//false
//know if a value is present or not
console.log(Object.values(employee).includes('mani'))//true
