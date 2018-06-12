
const
    express = require('express')
    crypto = require('crypto')
    router = express.Router()
    MongoClient = require('mongodb').MongoClient

    mongo_db_url = require('../config/keys').mongo_db_url

router.post('/auth', function(req, res, next) {
    userResp = req.body
    console.log(userResp)
    if(userResp['type'] === 'Login'){
        // find user in database, and if it is ok send cookie
        MongoClient.connect(mongo_db_url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("d4u");
            dbo.collection("users").findOne({login: userResp['login'], password: userResp['password']}, function(err, result) {
                console.log(result)
                if (result.length === 1){
                    console.log(result['cookie'])
                }
                db.close()
            })
        })
    }
    else if(userResp['type'] === 'Registration'){
        // if there is no email in database yet, register user
        MongoClient.connect(mongo_db_url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("d4u");
            dbo.collection("users").findOne({login: userResp['login']}, function(err, result) {
                console.log(result)
                if (result !== null){
                    res.send({'status': 'ok', 'message': 'Такой емаил уже есть!!'})
                }
                else{
                    var secretToken = null
                    require('crypto').randomBytes(48, function(ex, buf) { secretToken = buf.toString('hex') })
                    //sendEmailForNewUser()
                    const date = new Date()
                    const userInfo = {login: userResp['login'], password: userResp['password'], regDate: date, token: secretToken}
                    dbo.collection("users").insertOne(userInfo, function(err, result) {
                        console.log(result)
                        if (err) throw err
                        res.send({'status': 'ok', 'message': 'Мы вас зарегестрировали!!'})
                        db.close()
                    })
                }
                db.close()
            })
        })
    }
});

module.exports = router