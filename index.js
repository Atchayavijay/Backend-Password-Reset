import express from "express";
import dotenv from "dotenv";
import{connectDB} from "./db/connectDB.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();
const PORT =process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.listen(3000,()=>{
    connectDB();
    console.log("Sever is running on port: ", 3000);
});