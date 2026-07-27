import express from 'express'
import userRouter from './routes/userRoutes.js'
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import dns from 'dns'
import studentRouter from './routes/studentRoutes.js';
import {teacherRouter} from './routes/teacherRoutes.js';
import parentRouter from './routes/parentRoutes.js';
import attendanceRouter from './routes/attendenceRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import feesRouter from './routes/feesRoutes.js';
dns.setServers(["1.1.1.1","8.8.8.8"]);
dotenv.config();
connectDB();

const port=process.env.PORT || 4000
const app=express();
app.use(express.json())//middleware
app.use("/api/user",userRouter);
app.use("/api/student",studentRouter);
app.use("/api/teacher",teacherRouter);
app.use("/api/parent",parentRouter);

app.use("/api/attendance",attendanceRouter);

app.use("/api/fees",feesRouter);
app.use("/api/admin",adminRouter);
app.listen(port,()=>{
    console.log("server started")
})