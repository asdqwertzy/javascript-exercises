const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  var x = 0
  array.forEach(function(i) {
    x += i
  })
  return x
};

const multiply = function(...args) {
  var sol = 1;
  for (let i = 0; i < args.length; i++)
  {
    sol *= args[i]
  }
  return sol
};

const power = function(x,y) {
  return x**y;
};

const factorial = function(x) {
	var sol = 1
  if(x == 0) return 1;
  else {
    while (x > 0)
    {
      sol *= x
      x--;
    }
  }
  return sol;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
