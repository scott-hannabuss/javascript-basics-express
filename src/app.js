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
  
  req.body.a && req.body.b ? null : res.status(400).send({error:  'Parameters "a" and "b" are required.'}) 
  
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (b = 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
else if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' })
 }
else { res.json({ result: divide(a, b) });
}
});

module.exports = app;
