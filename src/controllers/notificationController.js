import notificationRepository from "../repositories/notificationRepository.js";

const getAllNotifications = async (req, res) => {
    try {
        const notifications = await notificationRepository.findAll();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notifications", error: error.message });
    }
};

const getNotificationById = async (req, res) => {
    try {
        const notification = await notificationRepository.findById(req.params.id);
        if (notification) {
            res.status(200).json(notification);
        } else {
            res.status(404).json({ message: "Notification not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching notification", error: error.message });
    }
};

const createNotification = async (req, res) => {
    try {
        const newNotification = req.body;
        const createdNotification = await notificationRepository.create(newNotification);
        res.status(201).json(createdNotification);
    } catch (error) {
        res.status(500).json({ message: "Error creating notification", error: error.message });
    }
};

const updateNotification = async (req, res) => {
    try {
        const updatedNotification = req.body;
        const success = await notificationRepository.update(req.params.id, updatedNotification);
        if (success) {
            res.status(200).json({ message: "Notification updated successfully" });
        } else {
            res.status(404).json({ message: "Notification not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating notification", error: error.message });
    }
};

const deleteNotification = async (req, res) => {
    try {
        const success = await notificationRepository.remove(req.params.id);
        if (success) {
            res.status(200).json({ message: "Notification deleted successfully" });
        } else {
            res.status(404).json({ message: "Notification not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting notification", error: error.message });
    }
};

export default { getAllNotifications, getNotificationById, createNotification, updateNotification, deleteNotification };
