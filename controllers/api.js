
const
    express = require('express')
    crypto = require('crypto')
    router = express.Router()
    MongoClient = require('mongodb').MongoClient

    sendEmailForNewUser = require('../utils/email_processing').sendEmailForNewUser
    sendEmailForForogtUser = require('../utils/email_processing').sendEmailForForogtUser
    mongo_db_url = require('../config/keys').mongo_db_url

router.post('/auth', function(req, res, next) {
    userResp = req.body
    if(userResp['type'] === 'Login'){
        // find user in database, and if it is ok send cookie
        MongoClient.connect(mongo_db_url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("d4u");
            dbo.collection("users").findOne({login: userResp['login'], password: userResp['password'], confirmed: true}, function(err, result) {
                console.log({login: userResp['login'], password: userResp['password'], confirmed: true})
                console.log(result)
                if (result !== null) {
                    //res.cookie('token', result['token'], { maxAge: 900000, httpOnly: true })
                    //res.redirect('/')
                    res.send({'status': '200', 'token': result['token']})
                }
                else {
                    res.send({'status': '400', 'message': 'такого нет'})
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
                    res.send({'status': '400', 'message': 'Такой емаил уже есть!!'})
                }
                else{
                    // генерируем токен для пользовотеля
                    const secretToken = crypto.randomBytes(48).toString('hex')

                    // отправляем уникальную ссылку на почту
                    sendEmailForNewUser(userResp['login'], secretToken)

                    // создаем словарь для записи в базу(дата нужна для удаления просроченных токенов)
                    const date = new Date()
                    const userInfo = {login: userResp['login'],
                                      password: userResp['password'],
                                      regDate: date,
                                      token: secretToken,
                                      confirmed: false}

                    // запись в базу
                    dbo.collection("users").insertOne(userInfo, function(err, result) {
                        console.log(result)
                        if (err) throw err
                        res.send({'status': '200', 'message': 'Мы вас зарегестрировали!!'})
                        db.close()
                    })
                }
                db.close()
            })
        })
    }
})

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


module.exports = router