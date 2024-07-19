/*
Encapsulation is all about not letting the child classes accessable to change 
properties and methods from outside of the class by making those properties or
methods private by using a keyword '#' before initializing the name of that
property so that property can be initialized as a private and cannot be
changed from outside of the parent class, public keyword is the same 
opposite of private thing.
*/

class BankAccount {
  customerId = Date.now();
  customerName;
  #balance = 0;
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.#balance = balance;
    this.customerId;
  }

  withdraw(amount) {
    this.#balance -= amount;
    console.log("Withdraw: " + amount);
  }

  deposit(amount) {
    this.#balance += amount;
    console.log("deposit:" + amount);
  }

  // by initiazling methods as setters or getters by 'set' or 'get'
  //keywords we can use them as property means we don't need to call it
  set setBalance(amount) {
    if (isNaN(amount)) {
      throw new Error("any: cannot be assigned to a number type.");
    }
    this.#balance = amount;
  }

  get getBalance() {
    return this.#balance;
  }
}

class Currentaccount extends BankAccount {
  constructor(customerName, balance) {
    super(customerName, balance);
  }

  // declaring a private method, now it cannot be directly accessible
  #calc_Interest() {
    console.log("Calculating Interest");
  }

  // we call calc_interest method by a public method so private can be safe by accessing.
  takeBusinessLoan(amount) {
    this.#calc_Interest();
    console.log("taking Business loan of " + amount);
  }
}

const user1 = new Currentaccount("Waqar", 200);

// user1.setBalance(50);

console.log(user1);

user1.setBalance = 50;

user1.takeBusinessLoan(120);

console.log(user1.getBalance);
