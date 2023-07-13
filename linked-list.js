export default class LinkedList {

    constructor(){
        this.listHead = null;
    }

    append(value) {

        //Temp node to properly assign the 'nextNode' property
        let tmp = new Node();
        tmp.nextNode = this.listHead;
        tmp.value = value;

        //Re-assign current head
        this.listHead = tmp;
    }

    prepend(value) {
        let currNode = this.listHead;

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
        let currNode = this.listHead;

        if (currNode !== null) {
            i++;
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
        let currNode = this.listHead;

        for (let i = 0; i < index; i++) {
            currNode = currNode.nextNode;
        }

        return currNode;
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




}

export class Node {

    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}


