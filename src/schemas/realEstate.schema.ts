import { z } from "zod";

export const addressSchema = z.object({
    street: z.string(),
    zipCode: z.string().max(8),
    number: z.string().nullable(),
    city: z.string(),
    state: z.string().max(2)
})

export const realEstateSchema = z.object({
    value: z.string().or(z.number()),
    size: z.number().int().positive(),
    address: addressSchema.partial({number: true}),
    categoryId: z.number(),
    sold: z.boolean().default(false)
})

const addressSchemaWithId = addressSchema.extend({id: z.number()})

export const realEstateReturnSchema = realEstateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    category: z.object({
        id: z.number(),
        name: z.string()
    }).nullable(),
    address: addressSchemaWithId

}).omit({ categoryId: true })

export const realEstateWithoutAddress = realEstateSchema.extend({ addressId: z.number().int().positive() }).omit({ address: true })

export const realEstateReturnManySchema = realEstateReturnSchema.array()