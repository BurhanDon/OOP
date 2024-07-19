/* We Dont need to create Instances for accessing the properties or
 methods only of static properties and methods, We can simply call Class name and access by '.',
 e.g User.CompareByAge();
*/

//Functions built inside the classes are called Methods.
//Variables created Inside the constructors are called properties.


/*
class Config {
  static dbUser = "UserName";
  static dbPass = "Read/Write";
  static apiToken = 123456;
}

const userrr = new Config();

console.log(Config.dbPass);
*/



class User {
  static id = 1;

  static Cache = {
    key: "Value",
  };

  constructor(name, age, income = 100) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;

    User.prototype.deposit = function deposit(amount) {
      this.income += amount;
    };
  }

  /*
  These type of methods are also known as utility functions
  in which they have no relation with Instances, If we note on static function
  they are called as properties not like regular functions.
  */
  static CompareByAge(user1, user2) {
    return user1.age - user2.age;
  }

  /* methods with static keywords cannot be called by Instances e.g
  user1.ComparebyIncome(), becuase they have no relation with each other they are stored
  in Classes not in Instances
  */

  static CompareByIncome(user1, user2) {
    return user1.income - user2.income;
  }

  // 'this' keyword work on static methods only when the property is also static
  static hasInCache() {
    console.log(this.Cache);
  }
}

User.hasInCache();

const user1 = new User("Burhan", 18, 600); //users created (which uses classes) are called Instances.

const user2 = new User("Raqeeb", 25, 200); //Instances have no relation with Static methods.

const user3 = new User("Jalal", 21, 400);
// Normal Properties are added to Instances created but Static Properties and methods will not.

const users = [user1, user2, user3];
// user1.deposit(10);
// users.sort((a, b) => a.age - b.age);

// users.sort(User.CompareByIncome);
// // users.sort(User.CompareByAge);

// console.log(users);
// console.log(users[user1.id].id);
