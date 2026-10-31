// 1. Defining a JavaScript Object using Literal Notation
const user = {
  // Properties (Key-Value pairs)
  name: "Alex",
  age: 28,
  isAdmin: true,
  skills: ["JavaScript", "Node.js", "Python"],
  
  // Nested Object
  preferences: {
    theme: "dark",
    notifications: false
  },

  // Method (Function inside an object)
  greet: function() {
    // "this" refers to the current object
    console.log(`Hello, my name is ${this.name}!`);
  },

  // Shorthand method syntax
  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy Birthday! I am now ${this.age}.`);
  }
};

// 2. Accessing Object Properties
console.log("--- Accessing Properties ---");
console.log(user.name);          // Dot notation: Output: "Alex"
console.log(user["age"]);        // Bracket notation: Output: 28
console.log(user.skills[0]);     // Accessing nested array: Output: "JavaScript"
console.log(user.preferences.theme); // Accessing nested object: Output: "dark"

// 3. Modifying and Adding Properties
console.log("\n--- Modifying & Adding ---");
user.age = 29;                   // Updating existing property
user.location = "New York";       // Adding a brand new property
console.log(user.location);      // Output: "New York"

// 4. Deleting a Property
delete user.isAdmin;
console.log(user.isAdmin);       // Output: undefined

// 5. Invoking Object Methods
console.log("\n--- Invoking Methods ---");
user.greet();                    // Output: "Hello, my name is Alex!"
user.celebrateBirthday();        // Output: "Happy Birthday! I am now 30."

// 6. Checking if a Property Exists
console.log("\n--- Property Check ---");
console.log("skills" in user);   // Output: true
console.log("isAdmin" in user);  // Output: false (deleted earlier)

// 7. Looping through Object Keys and Values
console.log("\n--- Iterating Over Object ---");
for (let key in user) {
  // Exclude methods from the print out for cleaner logs
  if (typeof user[key] !== "function") {
    console.log(`${key}:`, user[key]);
  }
}
