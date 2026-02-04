const express=require('express')
const noteModel = require('./models/notes.models')
const cors=require('cors')
const app=express()
const path=require('path')

app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

app.post('/api/notess',async (req,res)=>{
    const {title, description}=req.body

    const note=await noteModel.create({
        title, description
    })

    res.status(201).json({
        message:"Successfully created note...yeahh",note
    })
})

app.get('/api/notess',async (req,res)=>{
    const notes=await noteModel.find()

    res.status(200).json({
        message:"all notes displayed successfully",notes:notes
    })
})

app.delete('/api/notess/:index',async (req,res)=>{
    const id=req.params.index

    console.log(id)

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:`note deleted successfully....`
    })
})

app.patch('/api/notess/:index',async (req,res)=>{
    const id=req.params.index
    const {description}=req.body

    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"note updated successfully mann...."
    })
})


app.use("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'/public/index.html'))
})

module.exports=app