var a = 10;
var a = 12;
console.log(a);

let b = 10;
b = 12;
console.log(b);

const c = 10;
console.log(c);

let name = "John";
let cast = "Actor";
console.log(name + " " + cast);

let temp = 45;
if (temp > 30) {
  console.log("temperature is greater then 30");
}

let isRaining = true;
if (isRaining) {
  console.log("take an umbrella");
}

let num = parseInt(prompt("Enter a number:"));
if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

let attandance = {
  fullname: "John Doe",
  studentId: "np034",
  ispresent: true,
  classType: "tutorial",
  classGroup: 3,
};
console.log(attandance);
console.log(attandance.ispresent);
console.log(attandance["ispresent"]);

let string1 = "Hello";
let string2 = "World";
if (string1 === string2) {
  console.log("The strings are equal");
} else {
  console.log("The strings are not equal");
}

let age = parseInt(prompt("Enter your age:"));
if (age >= 0 && age <= 12) {
  console.log("The person is a child.");
} else if (age >= 13 && age <= 19) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age <= 64) {
  console.log("The person is an adult.");
} else if (age >= 65) {
  console.log("The person is a senior.");
} else {
  console.log("Invalid age entered.");
}

const targetNumber = 57;
let guess;
while (true) {
  guess = prompt("Guess the number:");
  guess = Number(guess);
  if (guess === targetNumber) {
    console.log("Correct! You guessed the number!");
    break;
  } else {
    console.log("Wrong guess. Try again!");
  }
}
