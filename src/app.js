const express = require('express');
const app = express();
app.use(express.json());

const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');
const { add } = require('./lib/numbers');
const { subtract } = require('./lib/numbers');
const { multiply } = require('./lib/numbers');
const { divide } = require('./lib/numbers');
const { remainder } = require('./lib/numbers');
const { negate } = require('./lib/booleans');
const { truthiness } = require('./lib/booleans');
const { isOdd } = require('./lib/booleans');
const { startsWith } = require('./lib/booleans');
const { getNthElement} = require('./lib/arrays');
const { arrayToCSVString } = require('./lib/arrays');
const { addToArray2 } = require('./lib/arrays');
const { elementsStartingWithAVowel } = require('./lib/arrays');
const { removeNthElement2 } = require('./lib/arrays');

// establishes what functions will be used and what response will be sent to the user from various HTTP requests

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:hello', (req, res) => {
  res.json({ result: uppercase(req.params.hello) });
});

app.get('/strings/lower/:hello', (req, res) => {
  res.json({ result: lowercase(req.params.hello) });
});

app.get('/strings/first-character/:hello', (req, res) => {
  res.json({ result: firstCharacter(req.params.hello) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacters(req.params.string, req.query.length) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' })
 }
else { res.json({ result: add(a, b) });
}
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' })
 }
else { res.json({ result: subtract(b, a) });
}
});

app.post('/numbers/multiply', (req, res) => {
  
  req.body.a && req.body.b ? null : res.status(400).send({error:  'Parameters "a" and "b" are required.'}) 
  
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' })
 }
else { res.json({ result: multiply(a, b) });
}
});

app.post('/numbers/divide', (req, res) => {
  
  typeof req.body.a && typeof req.body.b === "undefined" ? res.status(400).send({error:  'Parameters "a" and "b" are required.'}) : null  
  
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' })
  }
else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' })
 }
else { res.json({ result: divide(a, b) });
}
});

app.post('/numbers/remainder', (req, res) => {
  
  typeof req.body.a && typeof req.body.b === "undefined" ? res.status(400).send({error:  'Parameters "a" and "b" are required.'}) : null  
  
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' })
  }
else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' })
 }
else { res.json({ result: remainder(a, b) });
}
});

app.post('/booleans/negate', (req, res) => {
  res.json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {

  const a = parseInt(req.params.number) 

  if (Number.isNaN(a)) {
    res.status(400).send({ error: 'Parameter must be a number.' })
  }
else {
  res.json({ result: isOdd(a) });
}
});

app.get('/booleans/:string/starts-with/:letter', (req, res) => {

  if (req.params.letter.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' })
  }
  else {
  res.json({ result: startsWith(req.params.letter, req.params.string) });
  }
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.json({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.json({ result: addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  res.json({ result: removeNthElement2(0, req.body.array) });
});

app.post('/arrays/remove-specific-element', (req, res) => {
  const index = parseInt(req.query.index)
  res.json({ result: removeNthElement2(index, req.body.array) });
});

module.exports = app;
