var deleteNode = function(node) {
    while (node){
        node.val = node.next.val
        if (node.next.next === null){
            node.next = null;
        }
        node = node.next;
    }
};