var express = require('express')
var router = express.Router()


router.post('/about', function(req, res, next) {

    res.send({'status': 'ok'})
});

module.exports = router