import { Request, Response } from "express";
import { readSchedulesRealEstateService } from "../../services/schedules/readSchedules.service";

export const readSchedulesRealEstateControllers = async (req: Request, res: Response): Promise<Response> => {
    const realEstateId = parseInt(req.params.id)

    const schedules = await readSchedulesRealEstateService(realEstateId)

    return res.status(200).json(schedules)
}