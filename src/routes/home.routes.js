import { Router } from "express";
import * as Index from "../controllers/home.controller";

const router = Router();

router.get("/", Index.homePage);

export default router;
