
var
    express = require('express')

var
    router = express.Router()

const
    MongoClient = require('mongodb').MongoClient;

const
    mongo_db_url = require('../../config/keys').mongo_db_url;

router.post('/auth', function(req, res, next) {
    userResp = req.body
    console.log(userResp)
    if(userResp['type'] == 'Login'){
        // find user in database, and if it is ok send cookie

    }
    else if(userResp['type'] == 'Registration'){
        // if there is no email in database yet, register user
    }
    res.send({'status': 'ok'})
});

module.exports = router