import express from "express";
import authMiddleware from "../middleware/auth.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import  {getTeacherProfile,updateTeacherProfile} from "../controllers/teacherController.js";

export const teacherRouter=express.Router();
teacherRouter.get("/profile",authMiddleware,roleMiddleware("teacher"),getTeacherProfile);
teacherRouter.put("/profile",authMiddleware,roleMiddleware("teacher"),updateTeacherProfile)

//export default teacherRouter;
