//1
function temperatureCalc(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
let celsius = 25;
let fahrenheit = temperatureCalc(celsius);
console.log(fahrenheit + " fahrenheit");

//2

function NumberDifference(a, b) {
  if (a > b) {
    return a + "a greater than b" + b;
  } else if (a < b) {
    return b + "b greater than  a" + a;
  } else {
    return "Both numbers are equal";
  }
}

let a = 6;
let b = 7;
console.log(NumberDifference(a, b));

//3
function numberOfRepeat(str, times) {
  return str.repeat(times);
}
console.log(numberOfRepeat("Hey", 4));

//4

function startWithPrefix(str, prefix) {
  return str.startsWith(prefix);
}

console.log(startWithPrefix("Homework 5 is awesome", "homework"));
console.log(startWithPrefix("Homework 5 is awesome", "Homework"));

//5

function timeOfDay(time) {
  if (time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
let time = 20;

console.log(timeOfDay(time));
