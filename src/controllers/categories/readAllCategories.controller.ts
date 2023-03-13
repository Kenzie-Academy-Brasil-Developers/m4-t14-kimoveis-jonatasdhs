import { Request, Response } from "express"
import { readAllCategoriesService } from "../../services/categories/readAllCategories.service"

export const readAllCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    const categories = await readAllCategoriesService()

    return res.status(200).json(categories)
}