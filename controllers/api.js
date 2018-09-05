
const
    express = require('express')
    router = express.Router()


router.use('/', require('./api/profile/auth'))
router.use('/', require('./api/profile/forgot'))
router.use('/', require('./api/profile/confirm'))
router.use('/', require('./api/profile/save_image'))
router.use('/', require('./api/profile/save_user_info'))

router.use('/', require('./api/search/request'))

module.exports = router