var express = require('express')
var router = express.Router()

router.get('/tes2',(req,res)=>{
    res.send('test router2')
})

module.exports = router