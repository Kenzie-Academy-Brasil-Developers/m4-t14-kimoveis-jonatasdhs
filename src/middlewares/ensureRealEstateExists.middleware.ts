import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { RealEstate } from "../entities";
import { AppError } from "../errors";

export const ensureRealEstateExists = async (req: Request, res: Response, next: NextFunction) => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstateExists: RealEstate | null = await realEstateRepository.findOne({where: {id: req.body.realEstateId}})

    if(!realEstateExists) throw new AppError("RealEstate not found", 404)

    next()
}