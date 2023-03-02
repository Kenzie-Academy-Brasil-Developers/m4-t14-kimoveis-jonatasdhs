import { Request, Response } from "express"
import { IUserRequest } from "../interfaces/user.interfaces"
import { createUserService } from "../services/createUser.service"

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const userData: IUserRequest = req.body

    const user = await createUserService(userData)

    return res.status(201).json(user)
}