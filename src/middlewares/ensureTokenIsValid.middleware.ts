import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { AppError } from "../errors";
import 'dotenv/config'

export const ensureTokenIsValidMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let token = req.headers.authorization

    if(!token) {
        throw new AppError("Missing bearer token.", 401)
    }

    token = token.split(" ")[1]

    jwt.verify(
        token,
        process.env.SECRET_KEY!,
        (error: any, decoded: any) => {
            if(error) {
                throw new AppError(error.message, 401)
            }

            req.user = {
                id: parseInt(decoded.sub),
                admin: decoded.admin
            }
        }
    )

    next()
}

export const ensureUserIsAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const admin: boolean = req.user.admin

    if(!admin) throw new AppError("Insufficient Permission", 401)

    next()
}