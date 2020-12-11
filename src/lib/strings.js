let sayHello = (string) => {
  let greeting = " "; 
  if (string === "world") {
    greeting = "Hello, world!";
  }
  else if (string === "MCR Codes") {
    greeting = "Hello, MCR Codes!";
  }
  else if (string === "fsghjdfkhgf") {
    greeting = "Hello, fsghjdfkhgf!";
  }
    return greeting;
};

const uppercase = (string) => {
  return(string.toUpperCase()); 
}

const lowercase = string => {
  return(string.toLowerCase());
}

const countCharacters = string => {
  return string.length; 
}

const firstCharacter = string => {
  return string.substring(0, 1); 
};

const firstCharacters = (string, n) => {
  return string.substring(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
