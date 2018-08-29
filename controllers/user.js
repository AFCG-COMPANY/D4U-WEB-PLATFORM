var 
    express = require('express')
    router = express.Router()

const
    findName = require('../utils/find_name').findName


router.get('/login', function(req, res, next) {
    var cookie = req.cookies.token
    if (cookie !== undefined){
        res.redirect('/')
    }
    else {
        res.render('login')
    }
})


router.get('/profile', async function(req, res, next) {
    var cookie = req.cookies.token
    if (cookie === undefined){
        res.redirect('/')
    }
    else {
        var userName = await findName(cookie)
        res.render('profile', {user: userName})
    }
})


router.get('/forgot', function(req, res, next) {
    var cookie = req.cookies.token
    if (cookie !== undefined){
        res.redirect('/')
    }
    else {
        res.render('forgot')
    }
})


router.get('/logout', function(req, res, next) {
    res.clearCookie('token')
    res.redirect('/')
})


module.exports = router
