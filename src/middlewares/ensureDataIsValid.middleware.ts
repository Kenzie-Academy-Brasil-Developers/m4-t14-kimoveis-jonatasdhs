import { NextFunction, Request, Response } from "express";
import { userSchema, userUpdateSchema } from "../schemas/user.schema";

export const ensureDataIsValidMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const payload = userSchema.parse(req.body)

    req.body = payload

    next()
}

export const ensureDataUpdateIsValidMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const payload = userUpdateSchema.parse(req.body)

    req.body = payload

    next()
}