const mongoose=require('mongoose')

const noteSchema=new mongoose.Schema({
    title:String,
    description:String
})

const noteModel=mongoose.model('chacha',noteSchema)
module.exports=noteModel