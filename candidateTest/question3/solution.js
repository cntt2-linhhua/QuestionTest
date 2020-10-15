function findTheLowerCaseWOrd(str) {
  let res = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toUpperCase()
        && str[i] === str[i].toLowerCase()) 
    res=res.concat(str[i]);
  }

  return res;
}

module.exports = findTheLowerCaseWOrd;