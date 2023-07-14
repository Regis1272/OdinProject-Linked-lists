import LinkedList from "./linked-list.js";

let list = new LinkedList;

list.prepend("test1");
list.append("test2");
list.append("test3");

console.log(list.toString()); // ( test1 ) -> ( test2 ) -> ( test3 ) -> ( null )
console.log(list.size()); // 3
console.log(list.head()); // Node {value: 'test1', nextNode: Node}
console.log(list.tail()); // Node {value: 'test3', nextNode: Node}
console.log(list.at(1)); // Node {value: 'test2', nextNode: Node}
console.log(list.at(5));
// Error: Out of list bounds.
// null
console.log(list.at(-2));
// Error: Out of list bounds.
// null
list.pop();
console.log(list.toString()); // ( test1 ) -> ( test2 ) -> ( null )
console.log(list.contains("test1")); // true
console.log(list.contains("test42")); // false
console.log(list.find("test42"));
// Error: No such value.
// null
list.insertAt("test3", 10);
console.log(list.toString()); // ( test1 ) -> ( test2 ) -> ( test3 ) -> ( null )
list.insertAt("testA", 0);
console.log(list.toString()); // ( testA ) -> ( test1 ) -> ( test2 ) -> ( test3 ) -> ( null )
list.insertAt("testXYZ", 2);
console.log(list.toString()); // ( testA ) -> ( test1 ) -> ( testXYZ ) -> ( test2 ) -> ( test3 ) -> ( null )
list.removeAt(42); // Error: Index out of range.
list.removeAt(4);
console.log(list.toString()); // ( testA ) -> ( test1 ) -> ( testXYZ ) -> ( test2 ) -> ( null )
list.removeAt(1);
console.log(list.toString()); // ( testA ) -> ( testXYZ ) -> ( test2 ) -> ( null )
list.removeAt(0);
console.log(list.toString()); // ( testXYZ ) -> ( test2 ) -> ( null )
