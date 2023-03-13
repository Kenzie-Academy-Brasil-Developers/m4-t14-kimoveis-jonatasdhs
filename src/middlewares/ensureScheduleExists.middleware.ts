import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import { AppError } from "../errors";

export const ensureScheduleDataIsValid = async (req: Request, res: Response, next: NextFunction) => {
    const checkDate = new Date(req.body.date)
    if(checkDate.getDay() < 1 || checkDate.getDay() > 5) throw new AppError("Invalid date, work days are monday to friday", 400)

    const checkHour = req.body.hour.slice(0, 2)
    if(parseInt(checkHour) < 8 || parseInt(checkHour) > 18) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)

    next()
}

export const ensureScheduleExists = async (req: Request, res: Response, next: NextFunction) => {
    const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    
    let scheduleExists: Schedule | null = await schedulesRepository.createQueryBuilder("schedule")
    .where("schedule.date = :date", {date: req.body.date})
    .andWhere("schedule.hour = :hour", {hour: req.body.hour})
    .getOne()

    if(scheduleExists) throw new AppError("Schedule to this real estate at this date and time already exists", 409)

    scheduleExists = await schedulesRepository.createQueryBuilder("schedule")
    .where("schedule.realEstateId = :realEstateId", {date: req.body.realEstateId})
    .getOne()

    if(scheduleExists) throw new AppError("Schedule to this real estate at this date and time already exists", 409)

    next()
}