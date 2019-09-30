var findTheDifference = function(s, t) {
    var S = s.split("").sort();
    var T = t.split("").sort();

    for (var i = 0; i < T.length; i++){
        if (T[i] != S[i]){
          return (T[i]);
        }
    }
};