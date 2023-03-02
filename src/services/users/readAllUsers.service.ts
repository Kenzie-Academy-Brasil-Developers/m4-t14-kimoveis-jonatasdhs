import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserMultipleReturn } from "../../interfaces/user.interfaces";
import { userReturnMultipleSchema } from "../../schemas/user.schema";

export const readAllUsersService = async (): Promise<IUserMultipleReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    
    const users: Array<User> = await userRepository.find()

    return userReturnMultipleSchema.parse(users)
}