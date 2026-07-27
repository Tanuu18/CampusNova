import { calculateAttendancePercentage, getAttendanceHistory, getStudentsByFilter, markAttendance, updateAttendance } from "../controllers/attendanceController.js";
import express from 'express';
import authMiddleware from "../middleware/auth.js";
import roleMiddleware from "../middleware/roleMiddleware.js";


const attendanceRouter=express.Router();

attendanceRouter.post("/mark",authMiddleware,roleMiddleware("teacher"),markAttendance);
attendanceRouter.get("/students",authMiddleware,roleMiddleware("teacher"),getStudentsByFilter);
attendanceRouter.get("/history",authMiddleware,roleMiddleware("teacher","admin"),getAttendanceHistory);
attendanceRouter.put("/update",authMiddleware,roleMiddleware("teacher","admin"),updateAttendance);
attendanceRouter.get("/percentage",authMiddleware,roleMiddleware("teacher","admin"),calculateAttendancePercentage);

export default attendanceRouter;