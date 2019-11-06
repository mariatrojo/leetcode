var checkPerfectNumber = function(num) {
    var arr = [];
    var total = 0;
    
    if (num < 1){
        return false;
    }
    
    for (var i = 1; i < num; i++){
        if (num % i === 0){
            arr.push(i);
        }
    }
    
    for (var j = 0; j < arr.length; j++){
        total = total + arr[j];
    }
    
    if (total === num){
        return true;
    } else {
        return false;
    }
};