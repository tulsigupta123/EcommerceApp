import express from "express";
import dotenv from "dotenv";
import connectToDb from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

// configure env-
dotenv.config();

// connecting to db-
connectToDb();

// creating app-
const app = express();

// adding port info-
const port =  process.env.PORT|| 8080;

// middlewares-
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes-
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes)


app.get("/", (req, res) => {
    res.send("hello express it's new project");
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
