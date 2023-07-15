const palindromes = function (string) {
    var lowercase = string.toLowerCase();   
    var alphanumeric = lowercase.replaceAll(/[^a-zA-Z0-9]/g, "");
    
    var sol = alphanumeric.split("").reverse().join(""); 
    if (sol === alphanumeric) {
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
