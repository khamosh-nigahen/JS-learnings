const LinkedList = require("./linked-list-util")

function deleteMiddleNode() {
    if (sll.length < 3) {
        return `Middle of the linked list does not exist. Linked List length: ${sll.length}`
    }
    const nodeToBeDeleted = Math.round(sll.length / 2)
    console.log((nodeToBeDeleted))

    let ptr1 = sll.head
    for (i = 1; i < nodeToBeDeleted - 1; i++) {
        ptr1 = ptr1.next
    }
    ptr1.next = ptr1.next.next
}

const sll = new LinkedList()
sll.append(1)
sll.append(2)
sll.append(3)
sll.append(4)
sll.append(5)
sll.append(6)
sll.append(7)

console.log(sll._toArray())

deleteMiddleNode()

console.log(sll._toArray())