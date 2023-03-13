import { Request, Response } from "express";
import { ISchedules } from "../../interfaces/schedules.interfaces";
import { createSchedulesService } from "../../services/schedules/createSchedules.service";

export const createSchedulesControllers = async (req: Request, res: Response): Promise<Response> => {
    const scheduleData: ISchedules = req.body
    const userId = req.user.id

    await createSchedulesService(scheduleData, userId)

    return res.status(201).json({message: "Schedule created"})
}