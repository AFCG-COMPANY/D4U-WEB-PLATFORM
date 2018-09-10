
const
    express = require('express')
    crypto = require('crypto')
    router = express.Router()
    MongoClient = require('mongodb').MongoClient

    mongo_db_url = require('../../../config/keys').mongo_db_url


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

router.get('/passwords', (req, res) => {
    const count = 5

    // Generate some passwords
    const passwords = [1, 2, 3, 4, 5]

    // Return them as json
    res.json(passwords)

    console.log(`Sent ${count} passwords`)
})

module.exports = router