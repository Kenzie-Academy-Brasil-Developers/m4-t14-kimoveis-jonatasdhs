import { Request, Response } from "express"
import { retrieveEstateWithCategoryService } from "../../services/categories/retrieveEstateWithCategory.service"

export const retrieveEstateWithCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const id: number = parseInt(req.params.id)

    const realEstates = await retrieveEstateWithCategoryService(id)

    return res.status(200).json(realEstates)
}