var reverseString = function(s) {
    for (var i = 0; i < Math.floor(s.length/2); i++){
        var temp = s[s.length-1-i];
        s[s.length-1-i] = s[i];
        s[i] = temp;
    }
    return s;
};