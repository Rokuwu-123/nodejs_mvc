var express = require('express')
var router = express.Router()
var controller = require('../controllers/controller_router1')

router.get('/tes1',controller.home_page)
router.get('/tgl1',controller.tgl_client1)
module.exports = router