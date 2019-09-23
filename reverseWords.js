var reverseWords = function(s) {
    var arr = s.split(" ");
    var string2 = [];

    for (var i = 0; i < arr.length; i++){
      for (var j = arr[i].length - 1; j >= 0; j--){
        string2.push(arr[i][j]);
      }
      string2.push(" ");
    }
    string2.length--;
    var result = string2.join("");
    return(result);
};