var majorityElement = function(nums) {
    var number = nums.length/2;
    var count;
    
    for (var i = 0; i < nums.length; i++){
        count = 0;
        for (var j = 0; j < nums.length; j++){
            if (nums[i] === nums[j]){
                count++;
            }
            if (count > number){
                return nums[i];
            }
        }
    }
};