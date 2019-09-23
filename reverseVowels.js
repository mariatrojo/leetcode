/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
var vowels = [];

s = s.split("");

for (var i = 0; i < s.length; i++) {
  if (s[i] === "a"){
    vowels.push(s[i]);
    s[i] = i;
  } else if (s[i] === "e"){
    vowels.push(s[i]);
    s[i] = i;
  } else if (s[i] === "i"){
    vowels.push(s[i]);
    s[i] = i;
  } else if (s[i] === "o"){
    vowels.push(s[i]);
    s[i] = i;
  } else if (s[i] === "u"){
    vowels.push(s[i]);
    s[i] = i;
  }else if (s[i] === "A"){
    vowels.push(s[i]);
    s[i] = i;
  }
   else if (s[i] === "E"){
    vowels.push(s[i]);
    s[i] = i;
  }
   else if (s[i] === "I"){
    vowels.push(s[i]);
    s[i] = i;
  }
   else if (s[i] === "O"){
    vowels.push(s[i]);
    s[i] = i;
  }
   else if (s[i] === "U"){
    vowels.push(s[i]);
    s[i] = i;
  }
}

for (var j = 0; j < s.length; j++){
  for (var k = vowels.length-1; k >= 0; k--){
    if (typeof(s[j]) === 'number'){
      s[j] = vowels[k];
      vowels.pop();
    }
  }
}

s = s.join("");
return s;
};