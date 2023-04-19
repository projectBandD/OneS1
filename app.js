
const express = require('express')
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser())

const env=require('dotenv')

env.config()
const mongoose=require('mongoose')
const Port=process.env.PORT
const secret=process.env.SECRET
//----
const jwt=require('jsonwebtoken')
const { json } = require('body-parser')



mongoose.connect(process.env.MONGO_CONNECT).then(()=>{
    console.log('connect to mongo');
}).catch(err=>{"myErr"+err})

const userRouter = require('./routes/userRouter')
// const productRouter = require('./routes/productRouter')
//  שימוש בהם
app.use('/user', userRouter)

// const blogRouter=require('./routes/blogRouter')

// app.use('/blog',blogRouter)




app.listen(Port,()=>{
    console.log(`listening on Port ${Port}`);
});