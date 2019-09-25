var hasCycle = function(head) {
    var runner1 = head;
    var runner2 = head;
    while (runner2 != null && runner2.next != null){
        runner1 = runner1.next;
        runner2 = runner2.next.next;
        if (runner1 === runner2){
            return true;
        } 
    }
    return false;
};