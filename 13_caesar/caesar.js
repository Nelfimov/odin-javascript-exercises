const caesar = function (string, num) {

    if (Math.abs(num) === 25) {
        return string;
    }

    while (num >= 26) num -= 26;

    let result = '';

    [...string].forEach(element => {

        if (element.charCodeAt(0) > 122
            || element.charCodeAt(0) < 65
            || element.charCodeAt(0) > 90
            && element.charCodeAt(0) < 96) {
            result += element;
            return;
        }

        if (element.charCodeAt(0) <= 122
            && element.charCodeAt(0) + num > 122) {
            result += String.fromCharCode(element.charCodeAt(0) + num - 26);
        } else if (element.charCodeAt(0) >= 97
            && element.charCodeAt(0) + num < 97) {
            result += String.fromCharCode(element.charCodeAt(0) + num + 26);
        } else if (element.charCodeAt(0) <= 90
            && element.charCodeAt(0) + num > 90) {
            result += String.fromCharCode(element.charCodeAt(0) + num - 26);
        } else if (element.charCodeAt(0) >= 65
            && element.charCodeAt(0) + num < 65) {
            result += String.fromCharCode(element.charCodeAt(0) + num + 26);
        }
        else {
            result += String.fromCharCode(element.charCodeAt(0) + num);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = caesar;
