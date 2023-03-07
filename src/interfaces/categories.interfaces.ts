import { z } from "zod";
import { categoriesReturnManySchema, categoriesReturnSchema, categoriesSchema } from "../schemas/categories.schema";

export type ICategory = z.infer<typeof categoriesSchema>
export type ICategoryReturn = z.infer<typeof categoriesReturnSchema>
export type ICategoryManyReturn = z.infer<typeof categoriesReturnManySchema>