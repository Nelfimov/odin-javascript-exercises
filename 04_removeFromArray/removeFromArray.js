const removeFromArray = function (array, ...items) {
  let result = [];
  array.forEach((element) => {
    if (!items.includes(element)) result.push(element);
  });
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
