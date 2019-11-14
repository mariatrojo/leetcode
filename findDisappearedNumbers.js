var findDisappearedNumbers = function(nums) {
  var result = [];
  var storeObj = {};
  for (var i = 0; i < nums.length; i++) {
    storeObj[nums[i]] = 1;
  }
  for (var i = 1; i < nums.length + 1; i++) {
    if (!storeObj[i]) {
        result.push(i);
    }
  }
  return result;
};