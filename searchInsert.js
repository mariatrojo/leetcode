var searchInsert = function(nums, target) {
    var flag = false;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] === target){
            flag = true;
            return i;
        }
    }
    if (!flag){
        for (var j = 0; j < nums.length; j++){
            if (target < nums[j]){
                return j;
            }
        }
        return j;
    }
};