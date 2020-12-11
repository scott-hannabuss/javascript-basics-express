const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b; 
};

const power = (a, b) => {
  return a ** b;
};

const round = (a) => {
return Math.round(a);
};

const roundUp = a => {
  return Math.ceil(a);
};

const roundDown = a => {
  return Math.floor(a);
};

const absolute = a => {
  return Math.abs(a);
};

const quotient = (a, b) => {
  let c = a / b; 

  if (c >= 0) {
  return Math.floor(c);
}

else if (c < 0) {
  return Math.ceil(c);
}

};


const remainder = (a, b) => {
  return a % b; 
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
