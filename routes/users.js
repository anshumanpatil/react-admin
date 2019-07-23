var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  let {email, password} = req.body;
  let success = false;
  let status = 401;
  if(email=='demo' && password=='demo'){
    success = true;
    status = 200;
  }
  res.status(status).json({
    success
  });
});

module.exports = router;
