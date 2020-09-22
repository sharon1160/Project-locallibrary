var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with the master');
});

router.get('/cool', function(req, res) {
  res.send("You're so cool"); // Modificandooo
});

module.exports = router;
