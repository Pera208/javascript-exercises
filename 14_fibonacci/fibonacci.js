const fibonacci = function(n) {
    if (n < 0) return 'OOPS';
    if (n === 0) return 0;

    let prev = 0, current = 1, temp;

    for (let i = 1; i <= n; i++) {
        temp = current;
        current = current + prev;
        prev = temp;
    }

    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
