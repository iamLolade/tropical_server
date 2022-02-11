import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import router from "./routes/fruitRoute";
import cors from "cors";

dotenv.config();

//express app
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/", router)

//port
const port = process.env.PORT || 4000;

//connect to database
const dbURI = process.env.dbURI as string
mongoose.connect(dbURI)
    .then(() => app.listen(port, () => console.log(`Listening on port: ${port}`)))
    .then(() => console.log("Connected to database"))
    .catch(error => console.log(error))
