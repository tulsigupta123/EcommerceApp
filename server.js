import express from "express";
import dotenv from "dotenv";
import connectToDb from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

// configure env-
dotenv.config();

// connecting to db-
connectToDb();

// creating app-
const app = express();

// adding port info-
const port = process.env.port || 8080;

// middlewares-
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes-
app.use('/api/v1/auth',authRoutes);

app.get("/",(req,res)=>{
    res.send("hello express it's new project");
}).listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})