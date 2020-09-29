/*
create a constructor function to specify data of customer in a bank. the data to be stored is : Account number, name, Balance.

create a method called as transaction which takes 2 args amount and code (1 for deposit, 0 for withdraw)

create a method the display the current balance for the customer 

if the withdraw amount is more than the balance then display "The balance is insufficient for the specified withdrawal"

*/
const bank={
    accountNumber:123456,
    name:'Prince',
    balance:2000,
    transaction:function(amount,code)
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
    },
    display:function()
    {
        return `The new balance is ${this.balance}`
    }

}
console.log(bank.transaction(10000,1))
console.log(bank.transaction(1000,0))
console.log(bank.display())