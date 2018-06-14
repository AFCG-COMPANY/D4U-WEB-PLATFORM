var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
    var cookie = req.cookies.token;
    res.render('login', {user: cookie})
});


router.get('/logout', function(req, res, next) {
    res.clearCookie('token')
    res.redirect('/')
});

module.exports = router;
