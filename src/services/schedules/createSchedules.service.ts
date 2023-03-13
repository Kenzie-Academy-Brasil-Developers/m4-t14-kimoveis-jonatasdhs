import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";
import { AppError } from "../../errors";

export const createSchedulesService = async (payload: any, userId: number): Promise<any> => {
    const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const checkDate = new Date(payload.date)
    if(checkDate.getDay() < 1 || checkDate.getDay() > 5) throw new AppError("Invalid date, work days are monday to friday", 400)

    const checkHour = payload.hour.slice(0, 2)
    if(parseInt(checkHour) < 8 || parseInt(checkHour) > 18) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)

    let scheduleExists: Schedule | null = await schedulesRepository.createQueryBuilder("schedule")
    .where("schedule.user = :user", {user: userId})
    .getOne()
    
    if(scheduleExists) throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    
    scheduleExists = await schedulesRepository.createQueryBuilder("schedule")
    .where("schedule.date = :date", {date: payload.date})
    .andWhere("schedule.hour = :hour", {hour: payload.hour})
    .getOne()

    if(scheduleExists) throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    
    const schedule = schedulesRepository.create({...payload, user: userId})

    await schedulesRepository.save(schedule)

    return schedule
}