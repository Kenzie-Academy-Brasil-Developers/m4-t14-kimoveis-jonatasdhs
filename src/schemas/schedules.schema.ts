import { z } from "zod";

export const schedulesSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
})

export const schedulesReturnManySchema = z.object({
    
})

export const schedulesReturnSchema = schedulesSchema.extend({
    id: z.number()
})