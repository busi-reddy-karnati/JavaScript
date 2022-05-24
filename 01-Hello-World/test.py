# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head,n):
        trace_ptr = head
        for i in range(n):
            trace_ptr = trace_ptr.next
        temp = head
        while trace_ptr.next != NULL:
            trace_ptr = trace_ptr.next
            temp = temp.next
        trace_ptr = temp
        trace_next = trace_ptr.next
        trace_ptr.next = trace_ptr.next.next
        del trace_next
        return head
        