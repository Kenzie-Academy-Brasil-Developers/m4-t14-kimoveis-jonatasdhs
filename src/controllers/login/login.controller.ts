import { Request, Response } from "express"
import { ILogin } from '../../interfaces/login.interfaces'
import { loginService } from '../../services/login/login.service'

export const loginControllers = async (req: Request, res: Response): Promise<Response> => {
    const loginData: ILogin = req.body

    const token = await loginService(loginData)

    return res.json({token: token})
}