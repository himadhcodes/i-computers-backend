import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import autharizeUser from "./lib/jwtlib.js";

const mongoURI = "mongodb+srv://Admin:1234@cluster0.mc9nmko.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoURI).then(
    ()=>{console.log("Mongo DB Connected")}
).catch(
    ()=>{console.log("Mongo DB Connection failed")}
)

const app = express();

app.use(express.json()); //Middlewere/Middle Man
app.use(autharizeUser) // middlewere for authorization | this fuction on lib/jwtlib.js


app.use("/users" , userRouter)
app.use("/products" , productRouter)


app.listen(3000, 
    ()=>{console.log("Running on Port No - 3000")}
)