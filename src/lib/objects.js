const createPerson = (name, age) => {

  var obj = new Object();
  obj.name = name;
  obj.age = age;
  return obj;
}

const getName = object => {
  answer = object.name;
  return answer;
};

const getProperty = (property, object) => {
  return (object[property]);
};

const hasProperty = (property, object) => {
  return property in object;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  else {
    return false;
  }
};

const getAges = people => {
  var ages = people.map(a => a.age);
  return ages;
};

const findByName = (name, people) => {
  let answer = people.find(a => a.name === name);
  return answer;
};

const findHondas = cars => {
  let answer = cars.filter(a => a.manufacturer === 'Honda');
  return answer;
};

const averageAge = people => {
  let count = people.reduce((a, b) => a + b.age, 0);
  var answer = (count / people.length);
  return answer;
};

const createTalkingPerson = (name, age) => {
  let bill = {
    name: "Bill",
    age: 40,
    introduce: function (name, age) {
      return "Hi Fred, my name is" + " " + this.name + " " + "and I am" + " " + this.age + "!";
    }
  }
  return bill;
}

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
