import { Router } from "express";

//Routes
import UserRouter from "./Modules/User/user.router.js";

const router = Router();

router.use("/user", UserRouter);

export default router;
