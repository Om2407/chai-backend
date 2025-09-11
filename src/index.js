// require("dotenv").config();

// import { DB_NAME } from "./constants";
// import mongoose from "mongoose";


import 'dotenv/config';
import express from 'express';
import connectDB from './db/index.js';

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Basic route
app.get('/', (req, res) => {
    res.send('API is running!');
});

// Start server after DB connection
connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`⚙️  Server is running at port : ${port}`);
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});


// import express from "express";
// const app = express()
// ( async () =>{
//     try{
//        await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", () =>{
//         console.log("ERROR: ",error)
//         throw error
//        })
//        app.listen(process.env.PORT,() =>{
//         console.log(`Server is running on port ${process.env.PORT}`)
//        })
//     } catch(error){
//         console.error("ERROR: ",error)
//         throw error
//     }
// })()