import { DeepPartial } from "typeorm"
import { z } from "zod"
import { userReturnMultipleSchema, userReturnSchema, userSchema, userUpdateSchema } from "../schemas/user.schema"

export type IUserRequest = z.infer<typeof userSchema>
export type IUserReturn = z.infer<typeof userReturnSchema>
export type IUserMultipleReturn = z.infer<typeof userReturnMultipleSchema>

export type IUserUpdate = DeepPartial<IUserRequest>

export interface IUserValid {
    id: number,
    admin: boolean
}