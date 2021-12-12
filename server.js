var express = require('express')
var config = require('./configs/server.conf')
var app = express()
var http = require('http')
var router1 = require('./routers/router1')
var router2 = require('./routers/router2')
var database = require('./configs/database.conf')

app.set('port', config.host || config.port)
app.set('view engine','ejs')
app.set('views','views')
app.use(express.json())

app.use((req,res,next)=>{
    req.con = database
    next()
})

app.get('/',(req,res)=>{
    res.send("server running")
})

app.use(router1)
app.use(router2)

http.createServer(app).listen(config.port,config.host, ()=>{
    console.log(`server running at http://${config.host}:${config.port}`)
})