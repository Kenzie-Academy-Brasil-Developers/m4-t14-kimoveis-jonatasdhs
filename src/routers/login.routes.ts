import { Router } from "express";
import { loginControllers } from "../controllers/login.controller";

export const loginRouter = Router()

loginRouter.post('', loginControllers)