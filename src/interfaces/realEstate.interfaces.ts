import { z } from "zod";
import { realEstateReturnManySchema, realEstateReturnSchema, realEstateSchema, realEstateWithoutAddress } from "../schemas/realEstate.schema";

export type IRealEstate = z.infer<typeof realEstateSchema>
export type IRealEstateReturn = z.infer<typeof realEstateReturnSchema>
export type IRealEstateReturnMany = z.infer<typeof realEstateReturnManySchema>
export type IRealEstateWithoutAddress = z.infer<typeof realEstateWithoutAddress>