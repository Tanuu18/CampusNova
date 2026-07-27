import express from "express";
import authMiddleware from "../middleware/auth.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import { addFees, deleteFees, getAllFees, getFeesByStudent, payFees, updateFees } from "../controllers/feesController.js";

const feesRouter=express.Router();
feesRouter.post("/add",authMiddleware,roleMiddleware("admin"),addFees);
feesRouter.get("/show",authMiddleware,roleMiddleware("admin"),getAllFees);
feesRouter.get("/student/:studentId",authMiddleware,roleMiddleware("admin"),getFeesByStudent);
feesRouter.put("/updateFees/:feeId",authMiddleware,roleMiddleware("admin"),updateFees);
feesRouter.delete("/:feeId",authMiddleware,roleMiddleware("admin"),deleteFees);
feesRouter.post("/pay/:feeId",authMiddleware,roleMiddleware("admin"),payFees);
export default feesRouter;