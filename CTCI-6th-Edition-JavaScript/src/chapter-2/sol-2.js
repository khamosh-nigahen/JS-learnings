const LinkedList = require("./linked-list-util")

function kthToLast(k) {
    let ptr1 = sll.head
    let ptr2 = sll.head
    for (i = 0; i < k; i++) {
        ptr1 = ptr1.next
    }

    while (ptr1 != null) {
        ptr1 = ptr1.next
        ptr2 = ptr2.next
    }
    console.log(ptr2.val);
}


const sll = new LinkedList()
sll.append(1)
sll.append(2)
sll.append(3)
sll.append(4)
sll.append(5)
sll.append(6)


console.log(sll._toArray())

kthToLast(3)

// console.log(sll._toArray())