// remove duplicates from an unsorted linked list

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
        // this.tail = null
    }

    printList() {
        let temp = this.head
        while (temp != null) {
            process.stdout.write(`${temp.val} -> `)
            // console.log(`${temp.val} -> `)
            temp = temp.next
        }
    }

    append(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
            // this.tail = node
        }

        else {
            let temp = this.head
            while (temp.next !== null) {
                temp = temp.next
            }
            temp.next = node
            node.next = null
        }

        this.length++
    }

    prepend(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++
    }

    insertAt(index, value) {
        const node = new Node(value)

        if (!this.head || this.length < index) {
            this.head = node
        } else {
            let temp = this.head
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next
            }
            node.next = temp.next
            temp.next = node
        }
        this.length++
    }

    pop() {

        if (!this.head) {
            return "List is Empty!!"
        }
        let temp = this.head
        while (temp.next.next !== null) {
            temp.next = null
        }
        this.length--
    }

    popFirst() {

        if (!this.head) {
            return "List is Empty!!"
        }
        let temp = this.head
        this.head = temp.next
        temp.next = null
        this.length--
    }

    removeAt(index) {
        if (!this.head) {
            return "List is Empty!!"
        }

        if (this.length < index) {
            return `List doesn't contain the index passed, List length: ${this.length}`
        }
        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
        }
        temp.next = temp.next.next
        this.length--
    }

    head() {
        return this.head
    }

    _toArray() {
        const arr = []
        let temp = this.head
        while (temp != null) {
            arr.push(temp.val)
            temp = temp.next
        }
        return arr
    }
}


// const sll = new LinkedList()
// sll.append(1)
// sll.append(2)
// sll.append(3)
// sll.prepend(0)
// sll.prepend(-1)
// sll.insertAt(2, 0.5)
// sll.popFirst()
// sll.removeAt(1)
// console.log(sll._toArray())
// sll.printList()


module.exports = LinkedList
