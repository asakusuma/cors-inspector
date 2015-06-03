var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send({
    message: 'Great success!'
  });
});

router.post('/', function(req, res) {
  res.send({
    message: 'Great success!'
  });
});

module.exports = router;
