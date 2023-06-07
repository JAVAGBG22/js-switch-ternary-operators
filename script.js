//SWITCH
// switch is an alternative way of writing a complicated if/else statement
/*
const day = "monday";

switch (day) {
  case "monday":
    // day === "monday" & notice : not ;
    console.log("Plan my course in JavaScript");
    // can execute multiple lines
    console.log("Go to the gym!");
    break;
  // you to end the case with break
  case "tuesday":
    console.log("Prepare for theory lesson");
    break;
  case "wednesday":
  case "thursday":
    // you can output the same for two different values
    console.log("Write some code examples");
    break;
  case "friday":
    console.log("Give students feedback");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day");
  // default will be executed if all other options fail
}

// solution
if (day === "monday") {
  console.log("Plan my course in JavaScript");
  console.log("Go to the gym!");
} else if (day === "tuesday") {
  console.log("Prepare for theory lesson");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write some code examples");
} else if (day === "friday") {
  console.log("Give students feedback");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day");
}


// LOGICAL OPERATORS

const hasDriversLicense = true;

const hasGoodVision = true;

// A and B variables

//console.log(hasDriversLicense && hasGoodVision);
// && = and operator
// both values needs to be true for the operation to return true

//console.log(hasDriversLicense || hasGoodVision);
// || = or operator
// only one needs to be true for the operation to return true

//console.log(!hasDriversLicense);
// '!' = not operator

const canDrive = hasDriversLicense && hasGoodVision;
//console.log(canDrive);

if (hasGoodVision && hasDriversLicense) {
  console.log("It's ok, you can drive!");
} else {
  console.log("Someone else should drive");
}

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasGoodVision && hasDriversLicense && !isTired) {
  console.log("Sara is ok to drive");
} else {
  console.log("Someone else should drive");
}
*/

// THE CONDITIONAL OPERATOR, TERNARY

const age = 25;

age >= 18
  ? // condition
    console.log("I like to drink beer")
  : // if
    console.log("I'll drink water..");
// else

//age >= 18 ? "beer" : "water";
const drink = age >= 18 ? "beer" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "beer" : "water"}`);
