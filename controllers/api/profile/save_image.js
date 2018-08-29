const
    express = require('express')
    router = express.Router()


router.get('/saveprofileimage', function(req, res, next) {
    res.send({'status': '200', 'message': 'Мы вас зарегестрировали!!'})
})

module.exports = router