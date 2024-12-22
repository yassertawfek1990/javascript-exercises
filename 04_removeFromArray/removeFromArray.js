const removeFromArray = function(arr, ...extras) {
    let final = arr.filter(x=>!extras.includes(x))
    return final
};

// Do not edit below this line
module.exports = removeFromArray;
