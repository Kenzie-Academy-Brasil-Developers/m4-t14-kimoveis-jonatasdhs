import { Router } from "express";
import { createCategoriesController } from "../controllers/categories/createCategories.controller";
import { readAllCategoriesController } from "../controllers/categories/readAllCategories.controller";
import { retrieveEstateWithCategoryController } from "../controllers/categories/retrieveEstateWithCategory.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureTokenIsValidMiddleware, ensureUserIsAdmin } from "../middlewares/ensureTokenIsValid.middleware";
import { categoriesSchema } from "../schemas/categories.schema";

export const categoriesRoutes = Router()

categoriesRoutes.post('', ensureDataIsValidMiddleware(categoriesSchema), ensureTokenIsValidMiddleware, ensureUserIsAdmin, createCategoriesController)
categoriesRoutes.get('', readAllCategoriesController)
categoriesRoutes.get('/:id/realEstate', retrieveEstateWithCategoryController)