var model1 = require('../models/model1')
exports.home_page = async (req,res)=>{
    console.log('vtgl')
    res.render('home',{
        
    })
}

exports.tgl_client1 = async(req,res)=>{
    try{
        vtgl = await model1.tgl_client1(req.con.client1)
        console.log(vtgl.rows[0])
        res.send(vtgl.rows[0])
    }catch(err){
        console.log(err.message)
        res.send(err.message)
    }
    
}

exports.tgl_client2 = async(req,res)=>{
    try{
        vtgl = await model1.tgl_client2(req.con.client2,[])
        console.log(vtgl)
        res.send(vtgl)
    }catch(err){
        console.log(err.message)
        res.send(err.message)
    }
    
}