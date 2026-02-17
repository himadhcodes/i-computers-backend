import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import autharizeUser from "./lib/jwtlib.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI).then(
    ()=>{console.log("Mongo DB Connected")}
).catch(
    ()=>{console.log("Mongo DB Connection failed")}
)

const app = express();

app.use(cors())

app.use(express.json()); //Middlewere/Middle Man
app.use(autharizeUser) // middlewere for authorization | this fuction on lib/jwtlib.js


app.use("/api/users" , userRouter)
app.use("/api/products" , productRouter)


app.listen(3000, 
    ()=>{console.log("Running on Port No - 3000")}
)