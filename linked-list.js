export default class LinkedList {

    constructor(){
        this.head = null;
    }

    append(value) {

        //Temp node to properly assign the 'nextNode' property
        let tmp = new Node();
        tmp.nextNode = this.head;
        tmp.value = value;

        //Re-assign current head
        this.head = tmp;
    }

    prepend(value) {
        let currNode = this.head;

        while(currNode.nextNode !== null) {
            currNode = currNode.nextNode;
        }

        if (currNode.nextNode === null) {

            //Declare new tail
            let tmp = new Node();
            tmp.value = value;

            //Set 'nextNode' linkage for current tail.
            currNode.nextNode = tmp;

        }
    }

    size() {
        let i = 0;
        let currNode = this.head;

        if (currNode !== null) {
            i++;
        }

        while(currNode.nextNode !== null) {
            i++;
            currNode = currNode.nextNode;
        }

        return i;
    }


}

export class Node {

    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}


