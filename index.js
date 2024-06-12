//1
console.log("//1//");
function sumN() {
  let sum = 0;
  let i = 1;
  while (i <= 10) {
    sum += i;
    i++;
  }

  return sum;
}
console.log(sumN());

//2
console.log("//2//");
let fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];

let i = 0;

while (i < fruits.length) {
  let fruit = fruits[i];
  if (fruit.includes("a")) {
    console.log(fruit.toUpperCase());
  } else if (fruit.length > 5) {
    console.log(fruit + " is longer than 5 characters.");
  } else {
    console.log(fruit + " is short fruit name");
  }

  i++;
}

//3
console.log("//3//");
let cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
];

let ind = 0;

do {
  let city = cities[ind];
  if (city.includes("o")) {
    console.log(city.replaceAll("o", "0"));
  } else if (city.length > 8) {
    console.log(city.substring(0, 8) + "...");
  } else {
    console.log(`${city} has ${city.length} characters`);
  }
  ind++;
} while (ind < cities.length);

//4
console.log("//4//");
let numbers = [1, 2, 3, 4, 5];

for (let square of numbers) {
  console.log(square * square);
}

//5
console.log("//5//");

let names = "Aleksandar";
let lastname = "Stojkov";

for (let char of names) {
  console.log(char + ": " + char.charCodeAt(0));
}

for (let char of lastname) {
  console.log(char + ": " + char.charCodeAt(0));
}

//6
console.log("//6//");

let persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

for (let info of persons) {
  console.log(`${info.name} is ${info.age} years old`);
}

//7
console.log("//7//");

let text = "Today is 2024-06-09 and it's a sunny day. Temperature is 25°C.";

//8
console.log("//8//");

let formData = {
  username: "john_doe",
  password: "passwo3",
  email: "johnexample",
  age: 215,
};

for (let key in formData) {
  if (key === "email") {
    if (!formData[key].includes("@")) {
      console.log("Email is not valid.");
    }
  } else if (key === "age") {
    if (typeof formData[key] !== "number" || formData[key] > 100) {
      console.log("Age is not valid.");
    }
  } else if (key === "password") {
    if (formData[key].length < 8) {
      console.log("Password is not valid.");
    }
  }
}
