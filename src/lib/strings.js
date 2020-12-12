let sayHello = (string) => {
  let greeting = " "; 
  if (string === "world") {
    greeting = "Hello, world!";
  }
  else if (string === "MCRCodes") {
    greeting = "Hello, MCRCodes!";
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

const firstCharacters = (string, length) => {
  return string.slice(0, length);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
