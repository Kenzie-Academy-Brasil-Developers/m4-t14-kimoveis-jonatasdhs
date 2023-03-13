import { Request, Response } from "express";
import { ICategory } from "../../interfaces/categories.interfaces";
import { createCategoriesService } from "../../services/categories/createCategories.service";

export const createCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    const categoryData: ICategory = req.body
    
    const category = await createCategoriesService(categoryData)

    return res.status(201).json(category)
}