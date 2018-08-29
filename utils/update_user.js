
const
    MongoClient = require('mongodb').MongoClient

    mongo_db_url = require('../config/keys').mongo_db_url

async function updateUser(req) {
    let cookie = req.cookies.token
    let userName = req.body;
    console.log(userName)
    console.log('find name cookie', cookie)
    if (cookie === undefined){
        return undefined
    }
    let db = await MongoClient.connect(mongo_db_url)
    let dbo = db.db('d4u')

    var userQuery = { token: cookie, confirmed: true}
    var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    let result = await dbo.collection("customers").updateOne(userQuery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });

    console.log(result)
    if ('name' in result){
        return result['name']
    }
    return 'Профиль'
}

exports.updateUser = updateUser