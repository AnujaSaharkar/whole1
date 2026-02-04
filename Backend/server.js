require('dotenv').config()
const PORT = process.env.PORT || 3000;
const app=require('./src/app')
const connectToDB=require('./src/config/database')

connectToDB()
app.listen(PORT,()=>{
    console.log('we are running our server on 3000...!!')

})