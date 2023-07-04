const convertToCelsius = function(input_temp) {
let result = (input_temp - 32) * 5/9
  return parseFloat(result.toFixed(1))
};

const convertToFahrenheit = function(input_temp) {
  let result = input_temp * 9/5 + 32
  return parseFloat(result.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
