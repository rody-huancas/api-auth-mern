import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();

// db
connectDB();

const PORT = process.env.PORT || 4001;
const app = express();

app.use(cors())
app.use(express.json())

app.use("/api", userRoutes)
app.get("/", (req, res) => res.send("Server is ready!"));

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});