const removeFromArray = function(arr, ...args) {
    let result = arr;
    for (i=0; i<args.length; i++) 
    {   
        if(result.includes(args[i]))
        {
            let index = result.indexOf(args[i])
            result.splice(index, 1)
        }
        else { continue; }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
