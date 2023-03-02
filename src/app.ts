import 'express-async-errors'
import express, { Application } from "express";
import { handleError } from "./errors";
import { userRouter } from './routers/user.routes';
import { loginRouter } from './routers/login.routes';

const app: Application = express()

app.use(express.json())

app.use('/users', userRouter)
app.use('/login', loginRouter)

app.use(handleError)

export default app