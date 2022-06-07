const fruits = new Array("apple", "banana");
console.log(fruits.length);

const fruits2 = "Apple, Banana".split(", ");
console.log(fruits2.length);

const fruits3 = ["apple", "banana"];
const fruitsString = fruits3.join(", ");
console.log(fruitsString);

const fruits4 = ["Apple", "Banana"];
console.log(fruits4.indexOf("Apple"));

const fruits5 = ["Apple", "Banana"];
const newLenght = fruits.push("Orange");
console.log(newLenght);

const fruits6 = ["Apple", "Banana", "Orange"];
const removedItem = fruits6.pop();
console.log(fruits6);
console.log(removedItem);

const fruits7 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = 2;
const removedItems = fruits7.splice(start);
console.log(fruits7);
console.log(removedItems);

const fruits8 = ["Apple", "Banana"];
const removedItem2 = fruits.shift();
console.log(fruits8);
console.log(removedItem2);

const fruits9 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start2 = 0;
const deleteCount1 = 3;
const removedItems3 = fruits9.splice(start2, deleteCount1);
console.log(fruits);
console.log(removedItems3);

const fruits10 = ["Banana", "Mango"];
const newLenght2 = fruits10.unshift("Strawberry");
console.log(fruits10);
console.log(newLenght2);

const fruits11 = ['Apple', 'Strawberry', 'Cherry', 'Banana', 'Mango'];
const start3 = 0
const deleteCount3 = 3;
const removedItem5 = fruits11.splice(start3, deleteCount3);
console.log(fruits11);
console.log(removedItem5);

const fruits12 = ['Banana', 'Mango'];
const newLenght3 =fruits12.unshift('Strawberry');
console.log(fruits12);
console.log(newLenght3);

const fruits13 = ['Strawberry', 'Banana', 'Mango'];
const start4 = fruits13.indexOf('Banana');
const deleteCount6 = 1;
const removedItems6 = fruits13.splice(start, deleteCount6);
console.log(fruits13);
console.log(removedItems6);


const fruits14 = ['Apple', 'Banana', 'Strawberry', 'Mango'];
const start5 = 1;
const deleteCount4 = 2;
const removedItem7 = fruits14.splice(start5, deleteCount4);
console.log(fruits14);
console.log(removedItem7);

const fruits15 = ['Apple', 'Banana', 'Strawberry'];
const start6 = -2;
const deleteCount7 = 2;
const removedItems9 = fruits15.splice(start6, deleteCount7, 'Mango', 'Cherry');
console.log(fruits15);
console.log(removedItems9);

const fruits16 = ['Apple', 'Mango', 'Cherry'];
for (const fruit10 of fruits16) {
console.log(fruit10)
}


const salut = ['Apple', 'Mango', 'Cherry'];
salut.forEach(function(item, index, array) {
    console.log(item, index);
});

// merge  multiple arrays 

const fructe = ['Apple', 'Banana', 'Strawberry'];
const moreFructe = ['Mango', 'Cherry'];
const combinedFructe = fructe.concat(moreFructe);
console.log(combinedFructe);

// de explicat copy and grouping