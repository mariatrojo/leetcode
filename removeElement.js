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