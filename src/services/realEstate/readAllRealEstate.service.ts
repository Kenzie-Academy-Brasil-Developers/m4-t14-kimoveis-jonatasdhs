import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

export const readAllRealEstateService = async (): Promise<any> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstate: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true
        }
    })

    return realEstate
}