//require('.dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from './db/index.js';
dotenv.config({
    path:'./env'
})

connectDB()



/*
(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       //Database is connected but experess not able to work
       app.on("error",(err)=>{
            console.log("ERROR :", err)
            throw err
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(err){
        console.log("Database Connection Failed :",err)
    }
})()
*/