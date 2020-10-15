function moveAllUppercaseLetetrsToFirst(s) {
  let res1 = '';
  let res2 = '';
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()
        && s[i] !== s[i].toLowerCase()) 
      res1=res1.concat(s[i]);
    else res2=res2.concat(s[i]);
  }

  return res1.concat(res2);
}

module.exports = moveAllUppercaseLetetrsToFirst;