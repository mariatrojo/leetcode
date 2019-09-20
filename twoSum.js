var twoSum = function(nums, target) {
    var newArr = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j < nums.length; j++) {
            if (i != j && nums[i] + nums[j] === target) {
                newArr.push(i);
                newArr.push(j);
                return newArr;
            }
        }
    }
};





