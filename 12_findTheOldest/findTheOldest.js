const findTheOldest = function (array) {
    const today = new Date();
    const year = today.getFullYear();
    let oldest;
    let ageComparison = 0;
    array.forEach(element => {
        if (element.yearOfDeath) {
            element.age = element.yearOfDeath - element.yearOfBirth;
        } else {
            element.age = year - element.yearOfBirth;
        }
        if (element.age > ageComparison) {
            ageComparison = element.age;
            oldest = element;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
