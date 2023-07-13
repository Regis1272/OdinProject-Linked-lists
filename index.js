import LinkedList from "./linked-list.js";

let list = new LinkedList;

list.append("I am the first TAIL");
list.append("I am the HEAD");

list.prepend("I am the NEW TAIL");

console.log(list);

console.log(list.size());

console.log(list.head());

console.log(list.tail());

/* console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2)); */


list.pop();
// console.log("popped list: " + list);
