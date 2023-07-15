const findTheOldest = function(array) {
    var oldest_index = 0
    var ages = []
    array.forEach(function(i) {
        if(i.yearOfDeath === undefined)
        {
            var currentDate = new Date();
            ages.push(currentDate.getFullYear() - i.yearOfBirth)
        }
        else {
            ages.push(i.yearOfDeath - i.yearOfBirth)
        }
    })
    var sol = ages.indexOf(Math.max(...ages))
    return array[sol];
};

// Do not edit below this line
module.exports = findTheOldest;
