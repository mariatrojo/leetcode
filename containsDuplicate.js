var containsDuplicate = function(nums) {
    for (var i = 0; i < nums.length; i++){
        for (var j = 0; j < nums.length; j++){
            if (i != j && nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
};