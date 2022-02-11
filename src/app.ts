import express from "express";
import cors from "cors";

//express app
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//port
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port: ${port}`))