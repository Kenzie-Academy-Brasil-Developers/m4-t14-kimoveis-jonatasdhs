import { NextFunction, Request, Response } from "express";
import { readAllUsersService } from "../services/users/readAllUsers.service";

export const readAllUsersController = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const users = await readAllUsersService()

    return res.status(200).json(users)
}