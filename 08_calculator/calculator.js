const add = function(n,x) {
	return n+x
};

const subtract = function(n,x) {
	return n-x
};

const sum = function(arr) {
  if (arr.length == 0 ) return 0
  if (arr.length == 1 ) return arr[0]
  let final = arr.reduce((a,b)=>a+b)
  return final
};

const multiply = function(arr) {
  if (arr.length == 0 ) return 0
  if (arr.length == 1 ) return arr[0]
  // return arr.reduce((product, current) => product * current)
  return arr.reduce((a,b)=>a*b)
  // return final
};

const power = function(n,x) {
	return n**x
};

const factorial = function(n) {
  if (n==0) {return 1}
	let final = 1
  for (let i = 1; i <= n;i++ ){final *= i}
  return final
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
