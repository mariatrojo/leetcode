var repeatedNTimes = function(A) {
    var num = A.length / 2;
    var obj = {};
    
    for (var i = 0; i < A.length; i++){
        if (obj[A[i]] > 0){
            obj[A[i]]++;
        } else {
            obj[A[i]] = 1;
        }
        
        if (obj[A[i]] === num){
            return A[i];
        }
    }
};