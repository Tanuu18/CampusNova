import { addParentByAdmin, addStudentByAdmin, addTeacherByAdmin, adminDashboard, deleteByAdmin, deleteParentByAdmin, getAllParent, getAllStudents, getAllTeacher, updateParentProfileByAdmin, updateStudentProfileByAdmin, updateTeacherProfileByAdmin } from "../controllers/adminController.js";
import express from 'express'
import authMiddleware from "../middleware/auth.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const adminRouter=express.Router();

adminRouter.get("/dashboard",authMiddleware,roleMiddleware("admin"),adminDashboard);
adminRouter.get("/students",authMiddleware,roleMiddleware("admin"),getAllStudents);
adminRouter.post("/student",authMiddleware,roleMiddleware("admin"),addStudentByAdmin);
adminRouter.put("/student/:id",authMiddleware,roleMiddleware("admin"),updateStudentProfileByAdmin)
adminRouter.delete("/delete/student/:id",authMiddleware,roleMiddleware("admin"),deleteByAdmin);
//teacher
adminRouter.get("/teachers",authMiddleware,roleMiddleware("admin"),getAllTeacher);
adminRouter.post("/teacher",authMiddleware,roleMiddleware("admin"),addTeacherByAdmin);
adminRouter.put("/teacher/:id",authMiddleware,roleMiddleware("admin"),updateTeacherProfileByAdmin)
adminRouter.delete("/delete/teacher/:id",authMiddleware,roleMiddleware("admin"),deleteByAdmin);

//parent
adminRouter.get("/parents",authMiddleware,roleMiddleware("admin"),getAllParent);
adminRouter.post("/parent",authMiddleware,roleMiddleware("admin"),addParentByAdmin);
adminRouter.put("/parent/:id",authMiddleware,roleMiddleware("admin"),updateParentProfileByAdmin)
adminRouter.delete("/delete/parent/:id",authMiddleware,roleMiddleware("admin"),deleteParentByAdmin);


export default adminRouter
