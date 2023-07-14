export default class LinkedList {

    constructor(){
        this.listHead = null;
    }

    prepend(value) {

        //Temp node to properly assign the 'nextNode' property
        let tmp = new Node();
        tmp.value = value;
        tmp.nextNode = this.listHead;

        //Re-assign current head
        this.listHead = tmp;
    }

    append(value) {
        let currNode = this.listHead;

        if (currNode === null) {
            this.prepend(value);

        } else {

            while(currNode.nextNode !== null) {
                currNode = currNode.nextNode;
            }

            //Declare new tail
            let tmp = new Node();
            tmp.value = value;

            //Set 'nextNode' linkage for current tail.
            currNode.nextNode = tmp;

        }

    }

    size() {
        let i = 0;
        let currNode = this.listHead;

        if (currNode !== null) {
            i++;
        } else {
            return i;
        }

        while(currNode.nextNode !== null) {
            i++;
            currNode = currNode.nextNode;
        }

        return i;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let currNode = this.listHead;

        while (currNode.nextNode !== null) {
            currNode = currNode.nextNode;
        }

        return currNode;
    }

    at(index) {
        if (index > this.size() - 1 || index < 0) {
            console.log("Error: Out of list bounds.");
            return null;
        } else {
            let currNode = this.listHead;

            for (let i = 0; i < index; i++) {
                currNode = currNode.nextNode;
            }

            return currNode;
        }
    }

    pop() {
        if (this.listHead === null) {
            console.log("Cannot pop an empty list.")
        } else {
            let currNode = this.listHead;

            // Look an extra link ahead for the correct one to pop
            while (currNode.nextNode.nextNode !== null) {
                currNode = currNode.nextNode;
            }

            // log tests
            // console.log("Current Node:");
            // console.log(currNode);
            // console.log("Current Linkage:");
            // console.log(currNode.nextNode);

            //Sever linkage
            currNode.nextNode = null;

            // more tests...
            // console.log("New Linkage:");
            // console.log(currNode.nextNode);
        }
    }

    contains(value) {
        let currNode = this.listHead;
        if (currNode.value === value) {
            return true;
        }

        while (currNode.nextNode !== null) {
            currNode = currNode.nextNode;
            if (currNode.value === value) {
                return true;
            }
        }

        return false;
    }

    find(value) {
        if (this.contains(value) === false) {
            console.log("Error: No such value.")
            return null;
        }

        let i = 0;
        let currNode = this.listHead;

        if (currNode.value === value) {
            return i;
        } else {
            
            while (currNode.nextNode !== null) {
                currNode = currNode.nextNode;
                i++;
                if (currNode.value === value) {
                    return i;
                }
            }
        }
    }

    toString() {
        let currNode = this.listHead;
        let listString = `( ${currNode.value} ) -> `;

        while (currNode.nextNode !== null) {
            currNode = currNode.nextNode;
            listString += `( ${currNode.value} ) -> `
        }

        listString += "( null )";
        return listString;
    }

    insertAt(value, index) {
        if (index > this.size() - 1) {
            this.append(value);
            return;
        } else if (index === 0) {
            this.prepend(value);
            return;
        }

        let tmp = new Node();
        tmp.value = value;

        // Update nextNode on newly inserted node
        let foreNode = this.at(index);
        tmp.nextNode = foreNode;

        // Update nextNode on preceding node in list
        let backNode = this.at(index - 1);
        backNode.nextNode = tmp;
    }

    removeAt(index) {
        // We'll be using the next node in the list regardless.
        if (this.size() === 0) {
            console.log("Error: Nothing to remove!");
            return;
        } else if (index === this.size() - 1) {
            this.pop();
            return;
        } else if (index > this.size() - 1) {
            console.log("Error: Index out of range.");
            return;
        }
        
        console.log(this);

        let removedNode = this.at(index);

        let foreNode = this.at(index + 1);
        console.log(foreNode);

        if (index === 0) {
            // Update listHead if index 0
            this.listHead = foreNode;
        } else {
            // Update nextNode on preceding node in list
            let backNode = this.at(index - 1);
            backNode.nextNode = foreNode;
        }

        // Remove pointer from old node
        removedNode.nextNode = null;

    }

    
}

export class Node {

    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}


