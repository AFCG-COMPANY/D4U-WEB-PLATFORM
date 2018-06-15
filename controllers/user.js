var express = require('express')
var router = express.Router()


router.get('/login', function(req, res, next) {
    var cookie = req.cookies.token
    if (cookie !== undefined){
        res.redirect('/')
    }
    res.render('login')
})


router.get('/forgot', function(req, res, next) {
    var cookie = req.cookies.token
    if (cookie !== undefined){
        res.redirect('/')
    }
    res.render('forgot')
})


router.get('/logout', function(req, res, next) {
    res.clearCookie('token')
    res.redirect('/')
})


module.exports = router
