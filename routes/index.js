var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  if (req.query.url) {
    var headers = {};
    headers['content-type'] = 'application/json';
    request({
      method: 'POST',
      uri: req.query.url,
      headers: headers
    }, function (error, response, body) {
      console.log(response.statusCode);
      if (!error && response.statusCode == 200) {
        
      }
      res.render('index', { url: req.query.url, output: JSON.stringify(response.headers) });
    });
  } else {
    res.render('index', { url: '' });
  }
});

module.exports = router;
