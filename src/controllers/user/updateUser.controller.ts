import { Response, Request } from "express";
import { IUserUpdate } from "../../interfaces/user.interfaces";
import { updateUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    const newUserData: IUserUpdate = req.body
    const id: number = parseInt(req.params.id)
    const userValid = req.user

    const newUser = await updateUserService(newUserData, id, userValid)

    return res.json(newUser)
}