import LinkedList from "./linked-list.js";

let list = new LinkedList;

list.append("I am the first TAIL");
list.append("I am the HEAD");

list.prepend("I am the NEW TAIL");

console.log(list);
console.log(list.head);
console.log(list.size());
