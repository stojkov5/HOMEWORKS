//1//

let stringNumber = "33.33";

let number = Number(stringNumber);

let result = (number * 5).toFixed(2);

console.log(result);

//2//

let randomNumber = Math.random();

randomNumber = randomNumber * 100;

let floorNumber = Math.floor(randomNumber);

console.log(floorNumber);

let ceilNumber = Math.ceil(randomNumber);

console.log(ceilNumber);

let roundNumber = Math.round(randomNumber);

console.log(roundNumber);

let truncNumber = Math.trunc(randomNumber);

console.log(truncNumber);

//3//

let distanceStr = "5.75";
let timeStr = "45m";

let distanceNumber = Number(distanceStr);
let timeNumber = parseInt(timeStr);
let speed = distanceNumber / (timeNumber / 60);
let roundSpeed = speed.toFixed(2);
console.log(
  "The runner ran " +
    distanceNumber +
    " kilometers in " +
    timeNumber +
    " minutes, at speed of " +
    roundSpeed +
    "km/h."
);

//4
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let randomColor = `rgb(${red}, ${green}, ${blue})`;

console.log(randomColor);

//5

let phoneNumber = "(123)456-7890";

let areaCode = Number(phoneNumber.substring(1, 4));

let remainingDigits = Number(
  phoneNumber.substring(5, 8) + phoneNumber.substring(9)
);

console.log("Area Code: ", areaCode);
console.log("Remaining Digits: ", remainingDigits);
