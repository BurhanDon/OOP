function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.getElementById("CustomerName");
const balance = document.getElementById("balance");
const deposit = document.getElementById("deposit");

const depositForm = document.getElementById("depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.getElementById("amount");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const accountbyId = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  const accountbyName = accounts.find(
    (account) => account.customerName === customerName.value
  );
  if (accountbyId == null) {
    accountbyId.deposit(+amount.value);
  } else {
    accountbyName.deposit(+amount.value);
  }
  console.log(accounts);
});
