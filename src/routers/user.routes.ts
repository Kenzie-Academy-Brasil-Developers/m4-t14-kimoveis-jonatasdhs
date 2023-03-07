import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";
import { readAllUsersController } from "../controllers/user/readAllUsers.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureTokenIsValidMiddleware, ensureUserIsAdmin } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { userSchema, userUpdateSchema } from "../schemas/user.schema";

export const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), createUserController)
userRoutes.get('', ensureTokenIsValidMiddleware, ensureUserIsAdmin, readAllUsersController)
userRoutes.patch('/:id', ensureDataIsValidMiddleware(userUpdateSchema), ensureTokenIsValidMiddleware, updateUserController)
userRoutes.delete('/:id', ensureTokenIsValidMiddleware, ensureUserExistsMiddleware, ensureUserIsAdmin, deleteUserController)
