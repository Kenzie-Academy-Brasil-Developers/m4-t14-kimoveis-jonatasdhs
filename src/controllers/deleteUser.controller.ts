import { Request, Response } from "express";
import { deleteUserService } from "../services/users/deleteUser.service";

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = parseInt(req.params.id)

    await deleteUserService(id)

    return res.send()
}