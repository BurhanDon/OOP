// class BankAccount {
//   customerName: string;
//   accountNumber: number;
//   balance: number;

//   constructor(customerName: string, balance: number = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//   }

//   deposit(amount: number) {
//     this.balance += amount;
//   }

//   withdraw(amount: number) {
//     this.balance -= amount;
//   }
// }

// const burhan = new BankAccount("Burhan", 500);
// const raqeeb = new BankAccount("Raqeeb");
// raqeeb.deposit(200);
// raqeeb.withdraw(50);
// console.log(burhan, raqeeb);



const accountForm = document.getElementById("accountForm");
const customerName = document.getElementById("CustomerName");
const balance = document.getElementById("balance");

