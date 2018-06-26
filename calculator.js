exports.addTwoNumbers = function(valA, valB) {
    if (typeof(valA) !== 'number' | typeof(valB) !== 'number') {
        throw 'invalid value';
    }

    return valA + valB;
}