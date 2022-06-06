function addTwoNumbers(x, y) {
  return x + y;
}

var first = addTwoNumbers(20, 10);

console.log("Function ", first);
// ex 1

function firstEx(x, y) {
  if (x > y) {
    return "First param is greater than the second one";
  } else {
    return "First param is less than the second one";
  }
}

console.log("First Execution, ", firstEx(3, 1));
console.log("Second Exection, ", firstEx(1, 3));

function firstExTernary(x, y) {
  return x > y
    ? "First param is greater than the second one"
    : "First param is less than the second one";
}

console.log(firstExTernary(3, 1));

// ex 2

function oddNumber(x) {
  if (x % 2 === 0) {
    return "Even number";
  }
  return "Odd number";
}
console.log(oddNumber(5));

function oddNumberTernary(x) {
  return x % 2 === 0 ? "Even number" : "Odd number";
}
console.log(oddNumberTernary(4));

// ex 3

function thirdExemple(x, y) {
  if (x > 10 && y > 10) {
    return "Grater than 10";
  } else return "At least one parm less than 10";
}

console.log(thirdExemple(12, 23));
console.log(thirdExemple(12, 4));

function thirdExempleTernary(x, y) {
  return x > 10 && y > 10
    ? "Greater than 10"
    : "At least one param less than 10";
}

console.log(thirdExempleTernary(12, 23));
console.log(thirdExempleTernary(12, 4));
// ex 4

function forthExemple(x, y, z) {
  if (x !== y || y !== z) {
    return x;
  } else {
    return z;
  }
}

console.log(forthExemple(1, 2, 3));
console.log(forthExemple(1, 1, 1));

function forthExempleTernary(x, y, z) {
  return x !== y || y !== z ? x : z;
}
console.log(forthExempleTernary(1, 2, 3));
console.log(forthExempleTernary(1, 1, 1));

// ex 5

function fifth(x) {
  if (x > 10 && x < 20) {
    return x;
  } else {
    return "Not-param";
  }
}
console.log(fifth(12));
console.log(fifth(22));

function fifthTernary (x) {
    return x > 10 && x < 20 ? x : "Not-param" ;
}

console.log(fifthTernary(12))
console.log(fifthTernary(22))


// EXERCISE 2  

const str = 'My Text';
const last = str[str.length -1];
const string  = 'elephone';
const textConcat = last + string;

console.log(textConcat)


// EXERCISE 3

function equal(x, y) {
    return x === y ? "equal" : "Params are not equal"
}
console.log (equal(0, 0))

// string  exemple 
let str2 = "Ana, Are, Multe, Mere";
let part = str2.slice ( 5, 8);

console.log (part)
 
let str3 = "Apple, Banana, Kiwi";
let part3 = str3.slice(-12, -6);

console.log (part3);

let str4 = "Apple, Banana, Kiwi";
let part4 = str4.substring(15, 19);

console.log (part4);

let str5 = "Apple, Banana, Kiwi";
let part5 = str5.substr(7);

console.log (part5);

let text1 = "Please visit Microsoft!";
let newText1 = text1.replace(/MICROSOFT/i, "W3Schools");

console.log(newText1)

let text2 = "      Hello World!      ";
let text3 = text2.trim();
console.log (text3);

let text4 = "HELLO WORLD";
let char5 = text4.charCodeAt(1);

console.log (char5)