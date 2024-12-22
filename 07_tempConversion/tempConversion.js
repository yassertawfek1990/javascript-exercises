const convertToCelsius = function(n) {
  let i = ((n - 32) * 5/9).toFixed(1)
  return Number(i)
};

const convertToFahrenheit = function(n) {
  let i = ((n * 9/5) + 32).toFixed(1)
  return Number(i)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
