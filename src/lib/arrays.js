let getNthElement = (index, array) => {
  while (index >= array.length) {
    index = (index - array.length)
  }
  let answer = array[index];
  return answer;
}

const arrayToCSVString = array => {
  let answer = array.join();
  return answer;
};

const csvStringToArray = string => {
  let answer = string.split(',')
  return answer;
};

const addtoarray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  let array3 = array.map(x => x);
  array3.push(element);
  return array3;
};

const removeNthElement = (index, array) => {
  array = array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  array1 = numbers.map(String);
  return array1;
};

const uppercaseWordsInArray = strings => {
  toUpper = function (x) {
    return x.toUpperCase();
  }
  strings = strings.map(toUpper);
  return strings;
};

const reverseWordsInArray = strings => {
  array1 = strings.join();

  function reverseString(input) {
    var output = "";
    for (var i = input.length - 1; i >= 0; i--) {
      output += input[i];
    }
    return output;
  }

  array2 = reverseString(array1);

  array3 = array2.split(',');

  array4 = array3.reverse();

  return array4;
};

const onlyEven = (numbers) => {
  return numbers.filter(x => x % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  let array2 = array.filter((x, indexvalue) => indexvalue !== index);
  return array2;
};

const elementsStartingWithAVowel = strings => {
  array2 = (strings.filter(str => /^[aeiou]/i.test(str)));
  return array2;
}

const removeSpaces = string => {
  string2 = string.replace(/\s+/g, '');
  return string2;
};

const sumNumbers = numbers => {
  let count = numbers.reduce((a, b) => a + b);
  return count;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addtoarray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
