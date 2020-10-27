const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const importData = require('./data.json');

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allows any origin
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Change request body to json
app.use(bodyParser.json());

app.get('/questions', (req, res, next) => {
  res.send(importData);
});

module.exports = app;