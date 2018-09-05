
const
    express = require('express')
    router = express.Router()
    MongoClient = require('mongodb').MongoClient

    sendEmailForForogtUser = require('../../../utils/email_processing').sendEmailForForogtUser
    mongo_db_url = require('../../../config/keys').mongo_db_url


router.post('/forgot', function (req, res, next) {
    MongoClient.connect(mongo_db_url, function (err, db) {
        if (err) throw err;
        userResp = req.body
        const dbo = db.db("d4u");
        dbo.collection("users").findOne({login: userResp['login'], confirmed: true}, function(err, result) {

            if (result !== null) {
                sendEmailForForogtUser(userResp['login'], result['password'])
                res.send({'status': '200', 'message': 'все отправили'})
            }
            else {
                res.send({'status': '400', 'message': 'такого нет'})
            }
            db.close()
        })
    })
})

module.exports = router