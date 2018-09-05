
const
    express = require('express')
    router = express.Router()
    MongoClient = require('mongodb').MongoClient

    mongo_db_url = require('../../../config/keys').mongo_db_url


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

module.exports = router