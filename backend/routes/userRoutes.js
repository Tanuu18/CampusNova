import { loginUser, changePassword, registerAdmin } from "../controllers/userController.js";
import express from 'express'
import authMiddleware from "../middleware/auth.js";
import roleMiddleware from "../middleware/roleMiddleware.js";


const userRouter=express.Router();
//userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.put("/change-password",authMiddleware,changePassword)
userRouter.post("/admin/register",registerAdmin);
userRouter.post("/admin/login",loginUser);
export default userRouter;  