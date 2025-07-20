import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001

//middleware
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json()) // this middleware will parse JSON bodies: accessing req.body
app.use(rateLimiter);


// custom simple middleware
app.use((req, res, next)=>{
    console.log(`Request method is ${req.method} & Request URL is ${req.url}`);
    next()
})

app.use("/api/notes", notesRoutes);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT: ", PORT);
    })
})


