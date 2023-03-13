import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate/createRealEstate.controller";
import { readAllRealEstateController } from "../controllers/realEstate/readAllRealEstate.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureTokenIsValidMiddleware, ensureUserIsAdmin } from "../middlewares/ensureTokenIsValid.middleware";
import { realEstateSchema } from "../schemas/realEstate.schema";

export const realEstateRoutes: Router = Router() 

realEstateRoutes.post('', ensureDataIsValidMiddleware(realEstateSchema), ensureTokenIsValidMiddleware, ensureUserIsAdmin, createRealEstateController)
realEstateRoutes.get('', readAllRealEstateController)