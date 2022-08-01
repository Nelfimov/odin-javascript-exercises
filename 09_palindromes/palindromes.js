const palindromes = function (string) {
    string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '').toLowerCase();
    console.log(string);
    array = Array.from(string);
    let i = 0
    while (i <= array.length / 2) {
        if (array[i] !== array[array.length - 1 - i]) return false;
        ++i;
    }
    return true;
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
