var reverseList = function(head) {
    var current = head;
    var prev_node = null;
    var next_node;

    while(current){
        next_node = current.next;
        current.next = prev_node;
        prev_node = current;
        current = next_node;
    }
    head = prev_node;
    return head;
};