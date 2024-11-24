import express from "express";
import notificationController from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", notificationController.getAllNotifications);
router.get("/:id", notificationController.getNotificationById);
router.post("/", notificationController.createNotification);
router.put("/:id", notificationController.updateNotification);
router.delete("/:id", notificationController.deleteNotification);

export default router;
