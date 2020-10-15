function canGetNestedInside(arr1, arr2) {
  if((Math.min.apply(Math, arr1) > Math.min.apply(Math, arr2))
    && (Math.max.apply(Math, arr1) < Math.max.apply(Math, arr2)))
    return true;
  else return false;
}

module.exports = canGetNestedInside;