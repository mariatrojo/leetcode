var countSegments = function(s) {
    var count = 0;
    
    if (s.length === 0){
        return 0;
    }
    
    s = s.split(" ");
    
    for (var i = 0; i < s.length; i++){
        if (s[i] != ""){
            count++;
        }
    }
    
    return count;
};