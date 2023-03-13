import { z } from "zod";
import { schedulesReturnSchema, schedulesSchema } from "../schemas/schedules.schema";

export type ISchedules = z.infer<typeof schedulesSchema>
export type ISchedulesReturn = z.infer<typeof schedulesReturnSchema>