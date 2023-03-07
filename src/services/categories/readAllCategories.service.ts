import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { categoriesReturnManySchema } from "../../schemas/categories.schema"

export const readAllCategoriesService = async () => {
    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categories: Array<Category> = await categoriesRepository.find()

    return categoriesReturnManySchema.parse(categories)
}