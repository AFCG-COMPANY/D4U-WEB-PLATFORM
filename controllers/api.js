var express = require('express')
var router = express.Router()


router.post('/auth', function(req, res, next) {
    userResp = req.body
    console.log(userResp)
    res.send({'status': 'ok'})
});

module.exports = router