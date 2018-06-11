
const
    express = require('express')
    router = express.Router()
    MongoClient = require('mongodb').MongoClient;
    mongo_db_url = require('../config/keys').mongo_db_url

router.post('/auth', function(req, res, next) {
    userResp = req.body
    console.log(userResp)
    const query = {login: userResp['login'], password: userResp['password']}
    console.log(query)
    if(userResp['type'] === 'Login'){
        // find user in database, and if it is ok send cookie
        MongoClient.connect(mongo_db_url, function (err, db) {
            if (err) throw err;
            const dbo = db.db("d4u");
            dbo.collection("users").findOne(query, function(err, result) {
                console.log(result)
                if (result.length === 1){
                    console.log(result['cookie'])
                }
                db.close();
            });
        });
    }
    else if(userResp['type'] === 'Registration'){
        // if there is no email in database yet, register user
    }
    res.send({'status': 'ok'})
});

module.exports = router