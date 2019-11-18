var twoSum = function(numbers, target) {
    for (var i = 0; i < numbers.length; i++){
        for (var j = 0; j < numbers.length; j++){
            if (i != j && numbers[i] + numbers[j] === target){
                return [i+1, j+1];
            }
        }
    }
};