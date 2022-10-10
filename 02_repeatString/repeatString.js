const repeatString = function (word, number) {
    if (number < 0) return "ERROR";
    let repeatedWord = "";
    for (let i = 0; i < number; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
