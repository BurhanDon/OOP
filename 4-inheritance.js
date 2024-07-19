//DRY Principle States do not repeat yourself.

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.customerId = Date.now();
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

// More Convenient way:

class CurrentAccount extends BankAccount {
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log("taking Business loan of " + amount);
  }
}

class SavingAccount extends CurrentAccount {
  constructor(customerName, balance) {
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
    console.log("taking personal loan of " + amount);
  }
}

// function CurrentAccount(customerName, balance = 0) {
//   // here we are accessing the Parent Constructor by call method and
//   // make sure first we write this in the call function so the
//   // newly class constructor can get by parent context.
//   BankAccount.call(this, customerName, balance);
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBussinessLoan = function (amount) {
//   console.log("Taking Business Loan " + amount);
// };

// function SavingAccount(customerName, balance = 0) {
//   // Linking Constructor with it's parent constructor, by doing this the
//   // child constructor can access all the methods and properties of it's parent constructor.
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 300;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//   console.log("taking Personal Loan of " + amount);
// };

// const user1 = new BankAccount("Burhan", 100);

const user2 = new SavingAccount("Raqeeb", 50);

const user3 = new CurrentAccount("Ahmed", 200);

user3.takeBusinessLoan(20 + ` by ${user3.customerName}`);

user3.withdraw(50);

user2.takePersonalLoan(20 + ` by ${user2.customerName}`);

user2.takeBusinessLoan(50 + ` by ${user2.customerName}`);

console.log(user2, user3);
