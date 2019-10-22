var removeElements = function(head, val) {
    var current = head;
    var prev = null;
    while (current) {
        if (current.val == val) {
            if (prev) {
                prev.next = current.next;
            }
            else {
                head = current.next;
                prev = null;
            }
            
        } else {
            prev = current;
        }
        
        current = current.next;
    }
    return head;
};