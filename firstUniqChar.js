//first attempt - too long

var firstUniqChar = function(s) {
    var str = s.split("");
    var num = 0;
    
    if (str.length === 0){
        return -1;
    } else {
        for (var i = 0; i < str.length; i++){
            num = 0;
            for (var j = 0; j < str.length; j++){
                if (str[i] === str[j]) {
                  num++;
                }
             }
          if (num === 1){
            return i;
          }
        }
    }
    if (num > 1){
      return -1;
    }
};