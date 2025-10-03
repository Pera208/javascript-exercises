const palindromes = function (str) {
    // filter for alphanumeric
    const a = "abcdefghijklmnopqrstuvwxyz0123456789";

    const clean = str.toLowerCase().split("").filter(c => a.includes(c)).join("");
    const rev = clean.split("").reverse().join("");
    return clean === rev;
};

// Do not edit below this line
module.exports = palindromes;
