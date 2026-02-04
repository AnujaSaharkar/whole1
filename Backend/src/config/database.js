const mongoose=require('mongoose')

function connectToDb(){
    const note=mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('we are connected with Db....')
    })
}

module.exports=connectToDb