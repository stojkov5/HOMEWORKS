//1
function mergeArrays(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
}
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
mergeArrays(array1, array2);
console.log(array1);

//2
let tasks = ["Study", "Exercise", "Read", "Write", "Code"];

let popTask = tasks.pop();
console.log(popTask);
console.log(tasks);

let unshiftTask = tasks.unshift("Jog", "Bath", "Sleep");
console.log(unshiftTask);
console.log(tasks);

let newArray = tasks.slice(0, 3);
console.log(newArray);

//3

function findPersonByName(people, name) {
  let person = people.find((person) => person.name === name);

  if (person) {
    return person;
  } else {
    return `Person with name ${name} not found.`;
  }
}

let people = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 30 },

  { name: "Charlie", age: 35 },
];

console.log(findPersonByName(people, "Bob"));
console.log(findPersonByName(people, "David"));
