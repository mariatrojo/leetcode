//125. Valid Palindrome

var isPalindrome = function(s) {
    var str = s.toLowerCase();
    str = str.replace(/[^\w\s]|_/g, "");
    str = str.replace(/\s+/g, "");
    str = str.split("");
    
    for (var i = 0; i < str.length; i++){
        if (str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
};