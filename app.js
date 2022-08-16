import express from 'express'
import {connectDB} from './db/connectdb.js'
import path from 'path'
import {studentRouter,teacherRouter} from './routes/web.js'
const app=express()

//Database Connection
const DATABASE_URL='mongodb://localhost:27017'
connectDB(DATABASE_URL)

//URL Encoded for post method
app.use(express.urlencoded({extended:false}))

//Static Files
app.use('/student',express.static(path.join(process.cwd(),"public")))

//Set Template Engine
app.set('view engine','ejs')

//Load Route
app.use('/student',studentRouter)

app.use('/teacher',teacherRouter)

//Port 
app.listen(4000,()=>{
    console.log('Listening to port 4000')
})