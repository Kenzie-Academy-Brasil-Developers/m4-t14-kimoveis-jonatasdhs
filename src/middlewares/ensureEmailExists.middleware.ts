import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { IUserRequest } from "../interfaces/user.interfaces";

export const ensureEmailExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const { email }: IUserRequest = req.body
    
    if(email) {
    const emailExists = await userRepository.findOne({where: {email}})

    if(emailExists) throw new AppError("Email already exists", 409)
    }

    next()  
}