import express from 'express'
import cors from 'cors'
import router from './Route/route.js';
const app=express();

app.use(cors({
    origin:"https://nexora-ecom.vercel.app",
    credentials:true
}))
app.use(express.json({limit:"16kb"}));

app.use("/api",router);
export default app