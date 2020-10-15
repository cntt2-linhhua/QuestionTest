function convertToArray(obj) {
  let res = Object.entries(obj).map(([k, v]) => ([String(k), v]));
  return res;
}

module.exports = convertToArray;