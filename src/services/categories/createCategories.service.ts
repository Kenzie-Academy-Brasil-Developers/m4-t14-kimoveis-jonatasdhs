import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { ICategory, ICategoryReturn } from "../../interfaces/categories.interfaces";
import { categoriesReturnSchema } from "../../schemas/categories.schema";

export const createCategoriesService = async (newCategory: ICategory): Promise<ICategoryReturn> => {
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categoryExists = await categoryRepository.findOne({where: {
        name: newCategory.name
    }})
    
    if(categoryExists) throw new AppError("Category already exists", 409)

    const category: Category = categoryRepository.create(newCategory)

    await categoryRepository.save(category)

    return categoriesReturnSchema.parse(category)
}