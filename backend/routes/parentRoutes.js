import express from "express";
import { getParentProfile, updateParentProfile } from "../controllers/parentController.js";
import authMiddleware from "../middleware/auth.js";
import roleMiddleware from "../middleware/roleMiddleware.js";



const parentRouter=express.Router();
parentRouter.get("/profile",authMiddleware,roleMiddleware("parent"),getParentProfile);
parentRouter.put("/profile",authMiddleware,roleMiddleware("parent"),updateParentProfile);
export default parentRouter;