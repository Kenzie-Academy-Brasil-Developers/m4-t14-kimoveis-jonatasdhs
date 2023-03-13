import { hashSync } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { IUserRequest, IUserReturn } from "../../interfaces/user.interfaces";
import { userReturnSchema } from "../../schemas/user.schema";

export const createUserService = async (userData: IUserRequest): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const emailExists = await userRepository.findOne({where: {email: userData.email}})
    
    if(emailExists) throw new AppError("Email already exists", 409)
    
    userData.password = hashSync(userData.password, 10)

    const user: User = userRepository.create(userData)
    
    await userRepository.save(user)
        
    return userReturnSchema.parse(user)
}