import { Request, Response } from "express";
import { readAllRealEstateService } from "../../services/realEstate/readAllRealEstate.service";

export const readAllRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await readAllRealEstateService()

    return res.json(realEstate)
}