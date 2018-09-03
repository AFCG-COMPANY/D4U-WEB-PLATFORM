
const
    express = require('express')
    crypto = require('crypto')
    router = express.Router()
    MongoClient = require('mongodb').MongoClient

    sendEmailForNewUser = require('../utils/email_processing').sendEmailForNewUser
    sendEmailForForogtUser = require('../utils/email_processing').sendEmailForForogtUser
    mongo_db_url = require('../config/keys').mongo_db_url

router.post('/forgot', function (req, res, next) {
    MongoClient.connect(mongo_db_url, function (err, db) {
        if (err) throw err;
        userResp = req.body
        const dbo = db.db("d4u");
        dbo.collection("users").findOne({login: userResp['login'], confirmed: true}, function(err, result) {
            console.log(result)
            if (result !== null) {
                console.log(result)
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

router.get('/confirm/:token', function (req, res) {
    const userToken = req.params['token']
    MongoClient.connect(mongo_db_url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("d4u");
        dbo.collection("users").findOne({token: userToken, confirmed: false}, function(err, result) {
            if (result !== null){
                dbo.collection("users").updateOne({token: userToken, confirmed: false}, { $set: {confirmed: true}}, function(err, result) {
                    if (err) throw err
                })
                res.cookie('token', userToken, { maxAge: 900000})
                res.redirect('/')
            }
            else{
                res.status(404).send('error')
            }
            db.close()
        })
    })
})

router.post('/request', function (req, res) {
    userResp = req.body
    console.log(userResp)
    MongoClient.connect(mongo_db_url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("d4u");
        dbo.collection("requests").insertOne(userResp, function(err, result) {
            if (err) {
                console.log('не записалось((')
            }
            else {
                res.send({'status': '200', 'message': 'мы все записали'})
            }
            db.close()
        })
    })
})

router.use('/', require('./api/profile/save_image'));
router.use('/', require('./api/profile/save_user_info'));
router.use('/', require('./api/profile/auth'));

module.exports = router