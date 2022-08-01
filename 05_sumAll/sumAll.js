const sumAll = function (a, b) {
    if (a * b < 0) return 'ERROR';
    if (typeof (a) !== 'number' || typeof (b) !== 'number') return 'ERROR';
    let result = 0;
    if (b < a) {
        let c = a;
        a = b;
        b = c;
    }
    for (a; a <= b; a++) result += a;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
