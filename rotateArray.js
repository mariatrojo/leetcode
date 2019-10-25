var rotate = function(nums, k) {
    for (var i = 1; i <= k; i++){
        var temp = nums[nums.length-1];
        for (var j = nums.length-1; j >= 1; j--){
            nums[j] = nums[j-1];
        }
        nums[0] = temp;
    }
    return nums;
};