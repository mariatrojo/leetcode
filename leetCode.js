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

var toLowerCase = function(str) {
    str = str.split("");
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "A") {
            str[i] = "a";
        } else if (str[i] === "B"){
            str[i] = "b";
        } else if (str[i] === "C"){
            str[i] = "c";
        } else if (str[i] === "D"){
            str[i] = "d";
        } else if (str[i] === "E"){
            str[i] = "e";
        } else if (str[i] === "F"){
            str[i] = "f";
        } else if (str[i] === "G"){
            str[i] = "g";
        } else if (str[i] === "H"){
            str[i] = "h";
        } else if (str[i] === "I"){
            str[i] = "i";
        } else if (str[i] === "J"){
            str[i] = "j";
        } else if (str[i] === "K"){
            str[i] = "k";
        } else if (str[i] === "L"){
            str[i] = "l";
        } else if (str[i] === "M"){
            str[i] = "m";
        } else if (str[i] === "N"){
            str[i] = "n";
        } else if (str[i] === "O"){
            str[i] = "o";
        } else if (str[i] === "P"){
            str[i] = "p";
        } else if (str[i] === "Q"){
            str[i] = "q";
        } else if (str[i] === "R"){
            str[i] = "r";
        } else if (str[i] === "S"){
            str[i] = "s";
        } else if (str[i] === "T"){
            str[i] = "t";
        } else if (str[i] === "U"){
            str[i] = "u";
        } else if (str[i] === "V"){
            str[i] = "v";
        } else if (str[i] === "W"){
            str[i] = "w";
        } else if (str[i] === "X"){
            str[i] = "x";
        } else if (str[i] === "Y"){
            str[i] = "y";
        } else if (str[i] === "Z"){
            str[i] = "z";
        }
    }
    str = str.join("");
    return str;
};