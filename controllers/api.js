var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
    res.send({'status': 'ok'});
});

router.get('/auth', function(req, res, next) {
    console.log(req)
    res.send({'status': 'ok'});
});

router.get('/login', function(req, res, next) {
    res.send('hello api');
});

router.get('/registration', function(req, res, next) {
    console.log(res)
    res.send('hello api')
});
module.exports = router;