import { z } from 'zod'
import { hashSync } from 'bcryptjs'

export const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(4).transform((pass) => {
        return hashSync(pass, 10)
    }),
    admin: z.boolean().default(false)
})

export const userReturnSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({password: true})

export const userUpdateSchema = userSchema.partial()
export const userReturnMultipleSchema = userReturnSchema.array()
