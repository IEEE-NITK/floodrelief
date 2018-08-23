var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/request_help', requestHelp);

function requestHelp(request, response, next) {
  
}

module.exports = router;
