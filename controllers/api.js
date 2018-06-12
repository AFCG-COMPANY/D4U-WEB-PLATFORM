
const
    express = require('express')
    crypto = require('crypto')
    router = express.Router()
    MongoClient = require('mongodb').MongoClient

    sendEmailForNewUser = require('../utils/email_processing').sendEmailForNewUser
    mongo_db_url = require('../config/keys').mongo_db_url

router.post('/auth', function(req, res, next) {
    userResp = req.body
    console.log(userResp)
    if(userResp['type'] === 'Login'){
        // find user in database, and if it is ok send cookie
        MongoClient.connect(mongo_db_url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("d4u");
            dbo.collection("users").findOne({login: userResp['login'], password: userResp['password'], confirmed: true}, function(err, result) {
                if (result !== null) {
                    res.cookie('token', userToken, { maxAge: 900000, httpOnly: true })
                    res.redirect('/')
                }
                else {
                    res.send({'status': 'ok', 'message': 'такого нет'})
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
                        res.send({'status': 'ok', 'message': 'Мы вас зарегестрировали!!'})
                        db.close()
                    })
                }
                db.close()
            })
        })
    }
});


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
                res.cookie('token', userToken, { maxAge: 900000, httpOnly: true })
                res.redirect('/')
            }
            else{
                res.status(404).send('error')
            }
            db.close()
        })
    })
})


module.exports = router