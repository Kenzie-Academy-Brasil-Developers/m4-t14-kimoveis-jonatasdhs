import { z } from "zod";

export const categoriesSchema = z.object({
    name: z.string()
})

export const categoriesReturnSchema = categoriesSchema.extend({
    id: z.number().int().positive()
})

export const categoriesReturnManySchema = categoriesReturnSchema.array()