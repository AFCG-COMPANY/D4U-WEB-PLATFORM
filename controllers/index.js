var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var cookie = req.cookies.token;
    /*
    if (cookie === undefined) {
        // no: set a new cookie
        res.cookie('cookieName', 12, { maxAge: 900000, httpOnly: true });
        console.log('cookie created successfully');
    }
    else{
        console.log(cookie)
    }
    */
    res.render('home', {user: cookie});
});

module.exports = router;