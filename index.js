//1 Switch
let userType = "viewer";

switch (userType) {
  case "admin":
    console.log("You have full access.");
    break;
  case "editor":
    console.log("You can edit content.");
    break;
  case "viewer":
    console.log("You can view content.");
    break;
  default:
    console.log("Role not recognized.");
}

//2 Switch

let os = "Windows";

switch (os) {
  case "Windows":
    console.log("You are using Windows.");
    break;
  case "MacOs":
    console.log("You are using MacOS.");
    break;
  case "Lunyx":
    console.log("You are using Linux. ");
    break;
  default:
    console.log("Operating system not recognized.");
}

//3 Functions

for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//4 and 5

let products = ["apple", "banana", "cherry", "orange"];

for (let i = 0; i < products.length; i++) {
  let product = products[i];
  console.log(product.toUpperCase(), product.length);
}

//6
let users = ["   user44444   ", "user223   ", " username12334   "];

for (let i = 0; i < users.length; i++) {
  users[i] = users[i].trim();
}

console.log(users);
