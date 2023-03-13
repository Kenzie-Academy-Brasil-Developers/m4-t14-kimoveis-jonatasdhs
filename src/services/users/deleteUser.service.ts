import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"

export const deleteUserService = async (id: number): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({id})

    if(!user) throw new AppError("User not found", 404)

    if(user.deletedAt !== null) throw new AppError("User not found", 400)

    await userRepository.softRemove(user!)
}