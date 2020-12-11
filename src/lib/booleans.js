const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  if (a === false && b === false) {
    return true;
  }

  return false;
};

const one = (a, b) => {
  if (a === true && b === false) {
    return true;
  }
  if (a === false && b === true) {
    return true;
  }
  return false;
};

const truthiness = a => {
  if (a) {
    return true;
  }

  return false;
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  }

  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }

  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }

  return false;
};

const isOdd = a => {
  if (a % 2 === 0) {
    return false;
  }

  return true;
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  }

  return false;
};

const isSquare = a => {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }

  return false;
};

const startsWith = (char, string) => {
  if (char === string.charAt(0)) {
    return true;
  }

  return false;
};

const containsVowels = string => {
  const str = string; 
  const result = /[aeiou]/gi.test(str) 
    return result
}


const isLowerCase = string => {
  return string === string.toLowerCase(); 
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
