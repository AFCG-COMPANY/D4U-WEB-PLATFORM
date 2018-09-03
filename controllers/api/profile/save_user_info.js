const
    express = require('express')
    router = express.Router()
    updateUser = require('../../../utils/update_user').updateUser;


router.post('/saveprofileinfo', async function(req, res, next) {

    const cookie = req.cookies.token;
    if (cookie){
        var updateResult = await updateUser(req);
        if (updateResult['status'] === 'ok'){
            res.send({'status': '200'})
        }
        else{
            res.send({'status': '500'})
        }
    }

    res.send({'status': '500'})

})

module.exports = router