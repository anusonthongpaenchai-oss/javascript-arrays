const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
let employees1 = {
  name : "Alicia",
  age : 29,
  hobbies : ["Shopping","Reading novels"],
};
let employees2 = {
  name : "Kody",
  age : 19,
  hobbies : ["Computer games","Wakeboard"],
};

employees.push(employees1)
employees.push(employees2)
console.log(employees);