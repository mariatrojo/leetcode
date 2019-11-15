var duplicateZeros = function(arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === 0){
            for (var j = arr.length-1; j > i; j--){
                arr[j] = arr[j-1];
            }
            arr[j] = 0;
            i++;
        }
    }
};