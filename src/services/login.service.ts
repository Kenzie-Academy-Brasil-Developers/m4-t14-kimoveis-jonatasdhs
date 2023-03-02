import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken'
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import 'dotenv/config'
import { ILogin } from "../interfaces/login.interfaces";
import { Repository } from "typeorm";

export const loginService = async (loginData: ILogin): Promise<any> => {
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        email: loginData.email
    })

    if(!user) {
        throw new AppError("Invalid credentials", 401)
    }

    const passwordValid = await compare(loginData.password, user.password)

    if(!passwordValid) throw new AppError("Invalid credentials", 401)
    
    const token: string = jwt.sign(
        {
            email: user.password,
            admin: user.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h', 
            subject: String(user.id)
        },
    )

    return token
    
} 