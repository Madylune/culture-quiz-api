const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRouter = require('./routes/index');
const questionsRouter = require('./routes/questions');

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allows any origin
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Change request body to json
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/questions', questionsRouter);

module.exports = app;