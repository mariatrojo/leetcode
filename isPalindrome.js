var isPalindrome = function(x) {
    var arr = x.toString();
    for (var i = 0; i < Math.floor(arr.length/2); i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};