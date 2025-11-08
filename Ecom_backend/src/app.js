import express from 'express'
import cors from 'cors'
import router from './Route/route.js';
const app=express();

app.use(cors({
    origin:" http://localhost:5173",
    credentials:true
}))
app.use(express.json({limit:"16kb"}));

app.use("/api",router);
export default app