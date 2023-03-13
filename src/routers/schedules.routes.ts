import { Router } from "express";
import { createSchedulesControllers } from "../controllers/schedules/createSchedule.controller";
import { readSchedulesRealEstateControllers } from "../controllers/schedules/readScheduleRealEstate.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureRealEstateExists } from "../middlewares/ensureRealEstateExists.middleware";
import { ensureTokenIsValidMiddleware, ensureUserIsAdmin } from "../middlewares/ensureTokenIsValid.middleware";
import { schedulesSchema } from "../schemas/schedules.schema";

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(schedulesSchema), ensureRealEstateExists, createSchedulesControllers)
schedulesRoutes.get('/realEstate/:id', ensureTokenIsValidMiddleware, ensureUserIsAdmin, ensureRealEstateExists, readSchedulesRealEstateControllers)