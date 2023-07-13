import LinkedList from "./linked-list.js";

let list = new LinkedList;

// Empty list pop test
list.pop()

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

// I believe the code is running so fast that the
// call to list.pop() interferes with the console.logs of the
// 3 previous lines...
// 
// When commenting out the list.pop() call below,
// the 3 previous console.logs work correctly.
console.log("original list:");
console.log(list);
console.log(list.at(1));
/* list.pop();
console.log("popped list:")
console.log(list); */

console.log(list.contains("I am the HEAD"));
console.log(list.contains("I am the first TAIL"));
console.log(list.contains("I am the NEW TAIL"));

console.log(list.find("I am the HEAD"));
console.log(list.find("I am the first TAIL"));
console.log(list.find("I am the NEW TAIL"));

console.log(list.toString());

