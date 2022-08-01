const getTheTitles = function (array) {
    let result = [];
    array.forEach(element => {
        result.push(element['title']);
    });
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
