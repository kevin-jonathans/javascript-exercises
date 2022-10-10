const sumAll = function(firstNumber, lastNumber) {
    if (firstNumber < 0 || lastNumber < 0) return "ERROR";
    if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) return "ERROR";
    
    let startNumber = firstNumber < lastNumber ? firstNumber : lastNumber;
    let endNumber = firstNumber < lastNumber ? lastNumber : firstNumber;
    let result = 0;
    for (startNumber; startNumber < endNumber +1; startNumber++ ) {
        result += startNumber;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
