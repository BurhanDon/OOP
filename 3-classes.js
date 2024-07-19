// Hoisting in Js doesnot work with classes functions.
class BankAccount {
  constructor(userName, balace = 0) {
    this.userName = userName;
    this.userId = Date.now();
    this.balace = balace;
  }
  deposit(amount) {
    this.balace += amount;
  }
}

class BankAccountGirl extends BankAccount {
  constructor(program, gender) {
    this.program = program;
    this.gender = gender;
  }
}

const daniyal = new BankAccount("Daniyal Alvi", 10);
const areeba = new BankAccount("Areeba", 20);
const Ali = new BankAccountGirl("Ali", 20, "BSCS", "Male");
daniyal.deposit(5);
console.log(daniyal, areeba, Ali);
