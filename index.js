//1
let temperature = 20;

if (temperature > 25) {
  console.log("It's hot");
} else if (temperature >= 16) {
  console.log("It's warm.");
} else if (temperature >= 0) {
  console.log("It's cold.");
} else {
  console.log("It's freezing!");
}

//2

let age = 30;

if (age >= 60) {
  console.log("Senior");
} else if (age >= 20) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else if (age >= 3) {
  console.log("Child");
} else {
  console.log("Infant");
}

//3

let evenNumber = 7;

let test = evenNumber % 2 == 0 ? "Even" : "Odd";
console.log(test);
