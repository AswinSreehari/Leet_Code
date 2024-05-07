/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function doubleIt(head: ListNode | null): ListNode | null {
    let n = [];
        while(head){
            n.push(head.val);
            head = head.next;
        }
    
        let isAdd = false;
        let p = null;
        for(let i = n.length - 1; i >= 0; i --){
            let val = isAdd ? n[i] * 2 + 1 : n[i] * 2;
            if(val >= 10){
                isAdd = true;
                val = val - 10;
            }else   isAdd = false;
    
            const node = new ListNode(val);
            node.next = p;
            p = node;
    
        }
        if(isAdd){
            const node = new ListNode(1);
            node.next = p;
            p = node;
        }
    
        return p;
    };