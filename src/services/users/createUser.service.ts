import { hashSync } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserRequest, IUserReturn } from "../../interfaces/user.interfaces";
import { userReturnSchema } from "../../schemas/user.schema";

export const createUserService = async (payload: IUserRequest): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(payload)

    await userRepository.save(user)

    return userReturnSchema.parse(user)
}