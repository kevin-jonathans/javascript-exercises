const removeFromArray = function(array, ...removeItems) {
    let newArray = array;
    for (let item of removeItems) {
        const index = newArray.indexOf(item);
        if (index !== -1){
            newArray.splice(index, 1);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
