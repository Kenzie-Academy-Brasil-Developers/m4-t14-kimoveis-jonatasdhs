import { Request, Response } from "express";
import { IRealEstate } from "../../interfaces/realEstate.interfaces";
import { createRealEstateService } from "../../services/realEstate/createRealEstate.service";

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const newRealEstate: IRealEstate = req.body

    const realEstate = await createRealEstateService(newRealEstate)

    return res.status(201).json(realEstate)
}