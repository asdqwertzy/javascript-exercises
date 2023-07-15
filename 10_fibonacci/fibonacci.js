const fibonacci = function(n) {
    const sequence = [1, 1];

    for (let i = 2; i < n; i++) {
      const num = sequence[i - 1] + sequence[i - 2];
      sequence.push(num);
    }
  
    if (typeof n === "string")
    {
        let x = parseInt(n)
        return sequence[x-1]
    }
    if (n < 0) return "OOPS"
    return sequence[n-1]

  }



// Do not edit below this line
module.exports = fibonacci;
