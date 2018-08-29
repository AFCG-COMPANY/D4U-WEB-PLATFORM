
const
    MongoClient = require('mongodb').MongoClient

    mongo_db_url = require('../config/keys').mongo_db_url

async function findName(cookie) {
	var userName = 'Неопознанная компания'
	console.log('find name cookie', cookie)
	if (cookie === undefined){
		return undefined
	}
    let db = await MongoClient.connect(mongo_db_url)
    let dbo = db.db('d4u')
    let result = await dbo.collection("users").findOne({token: cookie, confirmed: true})
    console.log(result)
    if ('name' in result){
        return result['name']
    }
    return 'Профиль'
}

exports.findName = findName