require('dotenv').config()
const app=require('./src/app')
const connectToDB=require('./src/config/database')

connectToDB()
app.listen(3000,()=>{
    console.log('we are running our server on 3000...!!')

})