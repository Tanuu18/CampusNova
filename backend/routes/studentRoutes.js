import  {getMyAttendance, getMyAttendancePercentage, getMyFees, getStudentProfile,updateStudentProfile}  from "../controllers/studentController.js";
import express from 'express'
import authMiddleware from "../middleware/auth.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
const studentRouter=express.Router();
studentRouter.get("/profile",authMiddleware,roleMiddleware("student"),getStudentProfile);
studentRouter.put("/profile",authMiddleware,roleMiddleware("student"),updateStudentProfile);
studentRouter.get("/my-percentage",authMiddleware,roleMiddleware("student"),getMyAttendancePercentage);
studentRouter.get("/my-attendance",authMiddleware,roleMiddleware("student"),getMyAttendance);
studentRouter.get("/my-fees",authMiddleware,roleMiddleware("student"),getMyFees)
export default studentRouter;