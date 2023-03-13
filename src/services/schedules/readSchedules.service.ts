import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"
import { AppError } from "../../errors"

export const readSchedulesRealEstateService = async (realEstateId: number) => {
    const realStateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    
    const realEstateExists: RealEstate | null = await realStateRepository.findOneBy({id: realEstateId})

    if(!realEstateExists) throw new AppError("RealEstate not found", 404)

    const schedules = await realStateRepository.createQueryBuilder("realEstate")
    .leftJoinAndSelect("realEstate.schedules", "schedules")
    .leftJoinAndSelect("realEstate.address", "address")
    .leftJoinAndSelect("realEstate.category", "category")
    .leftJoinAndSelect("schedules.user", "user")
    .where("realEstate.id = :id", {id: realEstateId})
    .getOne()
    
    return schedules
}