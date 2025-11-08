import app from './app.js';
import dotenv from 'dotenv';
import connectdb from './db/db.js'

dotenv.config({
    path:'./.env'
})

connectdb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`system is running on ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("db not connected",error);
})
