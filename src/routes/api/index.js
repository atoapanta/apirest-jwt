import { Router } from "express";
import taskRoutes from "./task.routes";
import authRoutes from "./auth.routes";

const router = Router();

router.use(taskRoutes);
router.use("/user", authRoutes);

export default router;
