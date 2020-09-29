/*
create a constructor function to specify data of customer in a bank. the data to be stored is : Account number, name, Balance.

create a method called as transaction which takes 2 args amount and code (1 for deposit, 0 for withdraw)

create a method the display the current balance for the customer 

if the withdraw amount is more than the balance then display "The balance is insufficient for the specified withdrawal"

*/
function Customer(accountNo,name,balance)
{
    this.accountNo=accountNo
    this.name=name
    this.balance=balance
    console.log(`hello ${this.name} welcome to our bank`)
    console.log(`your balance is ${this.balance}`)
    this.transaction=function(amount,code)
    {
        if(code==1)
        {
            return `The amount is deposited and the balance is ${this.balance+=amount}`
        }
        else if(code==0)
        {
            if(amount>this.balance)
            {
              return 'The balance is insufficient for the specified withdrawl'
            }
            else{ 
                return `The amount is withdrawn and the balance is ${this.balance-=amount}`
            }
        }
    }
    this.display=function()
    {
        return `The new balance is ${this.balance}`
    }
}
console.log('***********')
const c1=new Customer(125484,'ravi',2000)
console.log(c1.transaction(1000,1))
console.log(c1.display())
console.log('***********')

console.log('***********')
const c2=new Customer(15789,'rahul',10000)
console.log(c2.transaction(150000,0))
console.log(c2.display())
console.log('***********')

console.log('***********')
const c3=new Customer(15389,'rohit',1000)
console.log(c3.transaction(150,0))
console.log(c3.display())
console.log('***********')

