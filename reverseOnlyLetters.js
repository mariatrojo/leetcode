var reverseOnlyLetters = function(S) {
    S = S.split("");
    var arr = [];
    for (var i = 0; i < S.length; i++){
        if (S[i].toLowerCase() != S[i].toUpperCase()){
            arr.push(S[i]);
        }
    }

    for (var j = 0; j < S.length; j++){
      for (var k = arr.length-1; k >= 0; k--){
         if (S[j].toLowerCase() != S[j].toUpperCase()){
           S[j] = arr[k];
           arr.pop();
           j++;
        }
      }
    }
    S = S.join("");
    return S;
};