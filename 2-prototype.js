// Creating class like this is an Object created having properties and methods in it.

class BankAccount {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function (amount) {
    //   this.balance += amount;
    // };

    // this.withdraw = (amount) => {
    //   this.balance -= amount;
    // };
  }
}

const burhan = new BankAccount("Burhan Uddin");
const raqeeb = new BankAccount("Raqeeb Uddin", 200);

//We can add Methods to class prototype for reducing memory size

//By adding methods to class prototype we can use this methods in
//each and evey Instances without allocating much more memory sizes.

BankAccount.prototype.deposit = function(amount) {
  //here we adding methods(functions) in class prototype
  this.balance += amount;
};

//we can not use arrow fucntions in this case as arrow functions do not have there own context (this)

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

burhan.deposit(50);
burhan.withdraw(20);
raqeeb.withdraw(250);
console.log(burhan, raqeeb);
console.log(BankAccount.prototype);
