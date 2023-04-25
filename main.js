console.log("prova");
const myList = ["Water", "Chicken", "Banana", "Banana", "Cake", "Water"];

const myNewArray = _.chunk(myList, 3); // [["Water,","Chicken","Banana"]["Banana","Cake",Water]]
console.log(myNewArray);

const myNewArray2 = _.difference(myList, ["Banana", "Water"]); // ["Chicken","Cake"]
console.log(myNewArray2);

const myNewArray3 = _.intersection(myList, ["Banana", "Water"]); // ["Water","Banana"]
console.log(myNewArray3);

const myNewArray4 = _.join(myList, ","); // "Water,Chicken,Banana,Banana,Cake,Water"
console.log(myNewArray4);

const myNewArray5 = _.without(myList, "Banana"); // ["Water,"Chicken","Cake","Water"]
console.log(myNewArray5);

const myNewArray6 = _.uniq(myList, "Banana"); // ["Water", "Chicken", "Banana", "Cake"]
console.log(myNewArray6);
