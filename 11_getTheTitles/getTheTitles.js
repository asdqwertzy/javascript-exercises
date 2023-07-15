const getTheTitles = function(array) {
    var sol = []
    array.forEach(function(i) {
        sol.push(i.title)
    })
    return sol;
};

// Do not edit below this line
module.exports = getTheTitles;
