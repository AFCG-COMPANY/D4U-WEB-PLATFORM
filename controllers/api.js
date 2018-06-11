var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
    res.send({'status': 'ok'});
});

router.post('/auth', function(req, res, next) {
    console.log(req.body)
    res.send({'status': 'ok'});
});

module.exports = router;