import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Address, Category, RealEstate } from '../../entities'
import { AppError } from '../../errors'
import {IRealEstate, IRealEstateReturn} from '../../interfaces/realEstate.interfaces'
import { realEstateReturnSchema } from '../../schemas/realEstate.schema'
export const createRealEstateService = async (realEstateData: IRealEstate): Promise<IRealEstateReturn> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const category = await categoryRepository.findOneBy({id: realEstateData.categoryId})

    const addressExists = await addressRepository.findOne({
        where: {
            city: realEstateData.address.city,
            state: realEstateData.address.state,
            street: realEstateData.address.street,
            zipCode: realEstateData.address.zipCode,
        }
    })

    if(addressExists) throw new AppError("Address already exists", 409)
    
    const address: Address = await addressRepository.save(realEstateData.address)

    const realEstate: RealEstate = realEstateRepository.create({
        ...realEstateData, 
        address,
        category
    })
    
    await realEstateRepository.save(realEstate)
    
    return realEstateReturnSchema.parse(realEstate)
}