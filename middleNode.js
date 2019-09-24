var middleNode = function(head) {
    var node = head;
    var counter = 0;
    var midde;
    while (node.next){
        counter++;
        node = node.next;
    }
    middle = Math.ceil(counter/2);
    node = head;
    while (middle > 0){
        node = node.next;
        middle--;
    }
    head = node;
    return head;
};