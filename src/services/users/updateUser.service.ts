import { AppError } from "../../errors";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserReturn, IUserUpdate, IUserValid } from "../../interfaces/user.interfaces";
import { userReturnSchema } from "../../schemas/user.schema";

export const updateUserService = async (userData: IUserUpdate, id: number, userValid: IUserValid): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({id})

    
    if(!user) throw new AppError("User not found", 404)

    if(!userValid.admin && user.id !== userValid.id) throw new AppError("Insufficient permission", 404)
    
    const newUser: User = await userRepository.save({
        ...user,
        ...userData
    })

    return userReturnSchema.parse(newUser)
}