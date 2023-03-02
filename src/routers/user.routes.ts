import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";

export const userRouter: Router = Router()

userRouter.post('', ensureDataIsValidMiddleware, createUserController)
