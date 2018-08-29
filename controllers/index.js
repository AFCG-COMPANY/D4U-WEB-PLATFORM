var 
    express = require('express')
    router = express.Router()

const
    findName = require('../utils/find_name').findName



/* GET home page. */
router.get('/', async function(req, res, next) {
    
        const cookie = req.cookies.token
        console.log(cookie)
        var userName = await findName(cookie)
        console.log(userName)
        res.render('home', {user: userName})
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
    
})

module.exports = router