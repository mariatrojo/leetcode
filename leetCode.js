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

var isPalindrome = function(x) {
    var arr = x.toString();
    for (var i = 0; i < Math.floor(arr.length/2); i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

var isValid = function(s) {
    var str = s;
    var temp = [];
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            temp.push(str[i]);
        }
        if (str[i] === ")") {
            if (temp[temp.length-1] === "("){
                temp.pop();
            } else {
                return false;
            }
        }
        if (str[i] === "}") {
            if (temp[temp.length-1] === "{") {
                temp.pop();
            } else {
                return false;
            }
        }
        if (str[i] === "]") {
            if (temp[temp.length-1] === "[") {
                temp.pop();
            } else {
                return false;
            }
        }
    }
    if (temp.length === 0) {
        return true;
    } else {
        return false;
    }
};

var removeElement = function(arr, val) {
    var length = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != val) {
        arr[length] = arr[i];
        length++;
      }
    }
    arr.length = arr.length - length;
    return length;
};