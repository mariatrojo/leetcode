var isAnagram = function(s, t) {
    var str1 = s.split("");
    var str2 = t.split("");
    
    str1.sort();
    str2.sort();
    
    if (str1.length != str2.length){
        return false;
    }
    
    for (var i = 0; i < str1.length; i++){
        if (str1[i] != str2[i]){
            return false;
        }
    }
    return true;
};