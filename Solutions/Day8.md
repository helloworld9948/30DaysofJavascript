## 💻 Exercises

### Exercises: Level 1

1. Create an empty object called dog
1. Print the the dog object on the console
1. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
1. Get name, legs, color, age and bark value from the dog object
1. Set new properties the dog object: breed, getDogInfo

### Exercises: Level 2

1. Find the person who has many skills in the users object.
1. Count logged in users, count users having greater than equal to 50 points from the following object.

   ````js
   const users = {
     Alex: {
       email: 'alex@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript'],
       age: 20,
       isLoggedIn: false,
       points: 30
     },
     Asab: {
       email: 'asab@asab.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
       age: 25,
       isLoggedIn: false,
       points: 50
     },
     Brook: {
       email: 'daniel@daniel.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
       age: 30,
       isLoggedIn: true,
       points: 50
     },
     Daniel: {
       email: 'daniel@alex.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     John: {
       email: 'john@john.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
       age: 20,
       isLoggedIn: true,
       points: 50
     },
     Thomas: {
       email: 'thomas@thomas.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
       age: 20,
       isLoggedIn: false,
       points: 40
     },
     Paul: {
       email: 'paul@paul.com',
       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
       age: 20,
       isLoggedIn: false,
       points: 40
     }
   }```

1. Find people who are MERN stack developer from the users object
1. Set your name in the users object without modifying the original users object
1. Get all keys or properties of users object
1. Get all the values of users object
1. Use the countries object to print a country name, capital, populations and languages.

### Exercises: Level 3

1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

```js 
const prompt = require("prompt-sync")();
let personAccount = {
  _firstName: "John",
  lastName: "Doe",
  incomes: {
    shares: {
      amount: 1200,
      description: "Shares from investments"
    },
    salary: {
      amount: 1300,
      description: "Monthly salary"
    },
    funds: {
      amount: 1400,
      description: "Donations from family"
    }
  },
  expenses: {
    rent: {
      amount: 120,
      description: "Monthly rent"
    },
    utilities: {
      amount: 130,
      description: "Utility bills"
    },
    groceries: {
      amount: 140,
      description: "Groceries for the month"
    }
  },
  totalIncome: function() {
    let total = 0;
    for (let income in this.incomes) {
      total += this.incomes[income].amount;
    }
    return total;
  },
  totalExpense: function() {
    let total = 0;
    for (let expense in this.expenses) {
      total += this.expenses[expense].amount;
    }
    return total;
  },
  accountInfo: function() {
    console.log(`${this._firstName} ${this.lastName}`);
    console.log(`Incomes:`);
    for (let income in this.incomes) {
      console.log(`${income}: ${this.incomes[income].amount} (${this.incomes[income].description})`);
    }
    console.log(`Expenses:`);
    for (let expense in this.expenses) {
      console.log(`${expense}: ${this.expenses[expense].amount} (${this.expenses[expense].description})`);
    }
  },
  addIncome: function(income, amount, description) {
    this.incomes[income] = {
      amount: Number(amount), // Convert to number
      description: description
    };
  },
  addExpense: function(expense, amount, description) {
    this.expenses[expense] = {
      amount: Number(amount), // Convert to number
      description: description
    };
  },
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};

while (true) {
  console.log("1. Account info\n2. Add income\n3. Add expense\n4. Account balance\n5. Total income\n6. Total expense\n7. Exit\n");
  let value = prompt("Enter a value: ");
  switch (value) {
    case "1":
      personAccount.accountInfo();
      break;
    case "2":
      let newIncome = prompt("Enter the name of the income: ");
      let newAmount = prompt("Enter the amount of the income: ");
      let newDescription = prompt("Enter the description of the income: ");
      personAccount.addIncome(newIncome, newAmount, newDescription);
      break;
    case "3":
      let newExpense = prompt("Enter the name of the expense: ");
      let newAmountExpense = prompt("Enter the amount of the expense: ");
      let newDescriptionExpense = prompt("Enter the description of the expense: ");
      personAccount.addExpense(newExpense, newAmountExpense, newDescriptionExpense);
      break;
    case "4":
      console.log(`Account Balance: ${personAccount.accountBalance()}`);
      break;
    case "5":
      console.log(`Total Income: ${personAccount.totalIncome()}`);
      break;
    case "6":
      console.log(`Total Expense: ${personAccount.totalExpense()}`);
      break;
    case "7":
      return; 
    default:
      console.log("Enter the correct input");
  }
}

```

2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

  ```js
      const users = [
      {
          _id: 'ab12ex',
          username: 'Alex',
          email: 'alex@alex.com',
          password: '123123',
          createdAt:'08/01/2020 9:00 AM',
          isLoggedIn: false
      },
      {
          _id: 'fg12cy',
          username: 'Asab',
          email: 'asab@asab.com',
          password: '123456',
          createdAt:'08/01/2020 9:30 AM',
          isLoggedIn: true
      },
      {
          _id: 'zwf8md',
          username: 'Brook',
          email: 'brook@brook.com',
          password: '123111',
          createdAt:'08/01/2020 9:45 AM',
          isLoggedIn: true
      },
      {
          _id: 'eefamr',
          username: 'Martha',
          email: 'martha@martha.com',
          password: '123222',
          createdAt:'08/01/2020 9:50 AM',
          isLoggedIn: false
      },
      {
          _id: 'ghderc',
          username: 'Thomas',
          email: 'thomas@thomas.com',
          password: '123333',
          createdAt:'08/01/2020 10:00 AM',
          isLoggedIn: false
      }
      ];

      const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
  ```

    Imagine you are getting the above users collection from a MongoDB database.
    a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.  
```js

function signUp(){
  let username = prompt("Enter your username: ");
  if (users.find(user => user.username === username)) {
    console.log("Username already exists");
    return;
  }

  let email = prompt("Enter your email: ");
  let password = prompt("Enter your password: ");
  let user = {username, email, password};
  users.push(user);
}

```


    b. Create a function called signIn which allows user to sign in to the application  
```js

function singIn(){
  let username = prompt("Enter your username: ");
  let password = prompt("Enter your password: ");
  let user = users.find(user => user.username === username && user.password === password);
  if (user) {
    console.log(`Welcome ${user.username}`);
  } else {
    console.log("Invalid username or password");
  }
}

```
3. The products array has three elements and each of them has six properties.
    a. Create a function called rateProduct which rates the product
    ```js
    let productID= prompt ("Enter Product ID: ")
    let userId = prompt("Enter User ID: ")
    let rating= prompt("Enter Rating: ")
    function rateProduct(productID,userId,rating){
    for (let index = 0; index < products.length; index++) {
        if  (products[index]._id === productID){
        products[index].ratings.push({userId:userId,rate:rating})
        }
        else{
        console.log("Product not found")
        }
    }
    }
    ```
    b. Create a function called averageRating which calculate the average rating of a product  
    ```js
    let productID= prompt ("Enter Product ID: ")
    function averageRating(productID) {
    let sum = 0
    for (let index = 0; index < products.length; index++) {
        if (products[index]._id === productID) {
        for (let i = 0; i < products[index].ratings.length; i++) {
            sum += products[index].ratings[i].rate
        }
        return sum / products[index].ratings.length
        } 
    }
    }
    ```


4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
```js

let productID= prompt ("Enter Product ID: ")
let userId = prompt ("Enter User ID: ")
function likeProduct (productID, userID){
  for (let index = 0; index < products.length; index++) {
    if (products[index]._id === productID) {
      for (let index = 0; index < products[index].likes.length; index++) {
        if (products[index].likes[index] === userID) {
          console.log("You already liked this product\n so it getting unliked now");
          products[index].likes.splice(index, 1);
        }
        else{
          products[index].likes.push(userID);
        }
      }
    }
  }
}


```



