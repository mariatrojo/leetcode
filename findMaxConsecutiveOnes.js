var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var max2 = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] === 1){
            max++;
        } else {
            max = 0;
        }
        if (max > max2){
            max = max;
        }
    }
    return max2;
};