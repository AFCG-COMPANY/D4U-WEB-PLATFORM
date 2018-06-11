var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.render('login')
});


router.get('/logout', function(req, res, next) {
    res.clearCookie('cookieName')
    res.redirect('/')
});

module.exports = router;
