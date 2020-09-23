var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with the master');
});

router.get('/cool', function(req, res) {
  res.send("You're so badd"); // changing from "You're so cool" to "You're so badd"
});

module.exports = router;
