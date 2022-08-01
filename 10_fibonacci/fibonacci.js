const fibonacci = function (num) {
    num = parseInt(num);
    if (num < 0) return 'OOPS';
    result = [];
    let i = 1;
    while (i <= num) {
        if (result.length < 2) {
            result.push(1);
            continue;
        }
        result.push(result[i] + result[i - 1]);
        console.log(result);
        ++i;
    }
    return result[num - 1];
};

console.log(fibonacci(1));

// Do not edit below this line
module.exports = fibonacci;
