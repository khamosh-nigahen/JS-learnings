// Dups

const LinkedList = require("./linked-list-util")

// method-1 implement with 2 loops
function removeDups() {

    let ptr1 = sll.head

    while (ptr1 != null && ptr1.next != null) {
        // console.log(curr.val)
        let ptr2 = ptr1
        while (ptr2.next != null) {
            if (ptr1.val == ptr2.next.val) {
                dup = ptr2.next
                ptr2.next = ptr2.next.next
            } else {
                ptr2 = ptr2.next
            }
        }
        ptr1 = ptr1.next
    }
}

const sll = new LinkedList()
sll.append(1)
sll.append(2)
sll.append(3)
sll.append(2)
sll.append(6)
sll.append(3)
sll.append(5)
sll.append(5)
sll.append(3)
sll.append(6)
sll.append(3)
sll.append(5)

console.log(sll._toArray())


removeDups()

console.log(sll._toArray())