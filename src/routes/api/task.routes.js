import { Router } from "express";
import * as Tasks from "../../controllers/task.controller";
import { authenticate } from "../../middlewares/auth";

const router = Router();

router.get("/tasks", authenticate, Tasks.findAllTasks);
router.get("/task/:id", authenticate, Tasks.findOneTask);
router.post("/task", authenticate, Tasks.createTask);
router.put("/task/:id", authenticate, Tasks.updateTask);
router.delete("/task/:id", authenticate, Tasks.deleteTask);

export default router;
