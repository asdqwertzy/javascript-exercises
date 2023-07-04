const reverseString = function(string) {
    var array = string.split('');
    var array2 = [];
    while(array.length > 0) {
        let popped = array.pop();
        array2.push(popped);
    }
    let result = ""
    result = array2.join('');
    return result
};

// Do not edit below this line
module.exports = reverseString;
