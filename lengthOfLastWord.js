var lengthOfLastWord = function(s) {
    var str = s.trim().split(" ");
    
    return str[str.length-1].length;
};