import express from "express";
import { deleteMessage, getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router=express.Router();

router.get("/:id",protectRoute,getMessages);
router.post("/send/:id",protectRoute,sendMessage);
router.put("/update",protectRoute,deleteMessage);

export default router;