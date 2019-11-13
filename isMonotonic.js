var isMonotonic = function(A) {
    var increasing = true;
    var decreasing = true;

    for (var i = 0; i < A.length; i++){
      if (A[i] > A[i+1]){
        increasing = false;
      } else if (A[i] < A[i+1]){
        decreasing = false;
      }
    }

    if (increasing || decreasing){
      return true;
    } else {
        return false;
    }
};