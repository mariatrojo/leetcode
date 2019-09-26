var sortArrayByParity = function(A) {
    var newArr = [];
    for (var i = 0; i < A.length; i++){
        if (A[i] % 2 === 0){
            newArr.push(A[i]);
        }
    }
    for (var k = 0; k < A.length; k++){
        if (A[k] % 2 != 0){
            newArr.push(A[k]);
        }
    }
    return newArr;
};