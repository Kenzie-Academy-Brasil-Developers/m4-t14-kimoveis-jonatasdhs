import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"

export const retrieveEstateWithCategoryService = async (id: number) => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    
    const categoryExists = categoryRepository.findOneBy({id})

    if(!categoryExists) throw new AppError("Category not found", 404)

    const realEstateCategories = await categoryRepository.findOne({
        relations: {
            realEstate: true
        },
        where: {
            id: id
        }
    })

    if(!realEstateCategories) throw new AppError("Category not found", 404)

    return realEstateCategories
}