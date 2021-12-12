exports.tgl_client1 = async (koneksi)=>{
    vdata = await koneksi.query(`select current_date`,[])
        .catch(err=>{
            console.log('Error koneksi ambil tanggal client1 : ' + err.mesage)
        })
    return vdata
}

exports.tgl_client2 = async (koneksi)=>{
    vdata = await koneksi.query(`select current_date`,[])
        .catch(err=>{
            console.log('Error koneksi ambil tanggal client2 : ' + err.mesage)
        })
   return vdata
}