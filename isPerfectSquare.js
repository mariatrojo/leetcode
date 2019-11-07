var isPerfectSquare = function(num) {
    if (num < 2){
        return true;
    }
    for (var i = 2; i < num; i++){
        if (i * i === num){
            return true;
        }
    }
    return false;
};