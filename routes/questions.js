const express = require('express');
const router = express.Router();
const importData = require('../data.json');
const find = require('lodash/fp/find');
const toNumber = require('lodash/fp/toNumber') 

router.get('/', (req, res, next) => {
  res.send(importData);
});

router.get('/:id', (req, res, next) => {
  const question = find({ id: toNumber(req.params.id) }, importData);
  res.send(question);
});

module.exports = router;