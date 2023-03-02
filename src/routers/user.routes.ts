import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { readAllUsersController } from "../controllers/readAllUsers.controller";
import { updateUserController } from "../controllers/updateUser.controller";
import { ensureDataIsValidMiddleware, ensureDataUpdateIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureTokenIsValidMiddleware, ensureUserIsAdmin } from "../middlewares/ensureTokenIsValid.middleware";

export const userRouter: Router = Router()

userRouter.post('', ensureDataIsValidMiddleware, createUserController)
userRouter.get('', ensureTokenIsValidMiddleware, ensureUserIsAdmin, readAllUsersController)
userRouter.patch('/:id', ensureDataUpdateIsValidMiddleware, ensureTokenIsValidMiddleware, updateUserController)
userRouter.delete('/:id', ensureTokenIsValidMiddleware, ensureUserIsAdmin, deleteUserController)
