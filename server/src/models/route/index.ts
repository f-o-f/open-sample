var express = require('express');
var router = express.Router();

router.get('/goods', require('./goods.ts'));

module.exports = router;