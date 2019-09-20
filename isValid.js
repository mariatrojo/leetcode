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