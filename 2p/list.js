class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//nodo1=new Node(nodo);

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertHead(data) {
        if (this.head === null) {
            return this.head = new Node(data);
        }
        let node1 = new Node(data);
        node1.next = this.head;
        this.head = node1;
        this.length++;
    }

    insertTail(data) {
        if (this.head == null) {
            this.tail = new Node(data);
            this.head = this.tail;
            this.length++;
        } else {
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
            this.length++;
        }
    }

    deleteHead() {
        this.head.next = this.head.next.next;
        this.length--;
    }

    deleteTail() {
        let result = this.head;
        do {
            if (result.next.next.next === null) {
                result.next = this.tail;
                break;
            }
            result = result.next;
        } while (result.next.next != null);
        this.length--;
    }

    size() {
        return this.length;
    }

    toString() {
        let result = this.head;
        while (result != null) {
            console.log(result);
            result = result.next;
        }

    }

}

let lista = new LinkedList();
lista.insertTail(1);
lista.insertTail(2);
lista.insertHead(0);
console.log(lista.size());
console.log(lista.toString());
lista.deleteHead();
console.log(lista.toString());
console.log(lista.size());