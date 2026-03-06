import type { Request, Response, NextFunction } from 'express';
import { IRegisterParams, IUser } from './auth.interface.js';
import { userRegisterService } from './auth.service.js';

export async function registerController(req: Request, res:Response, next:NextFunction) {
    try {
        const data: IRegisterParams = req.body 
        const response = await userRegisterService(data)

        res.status(201).json({
            message: "data created",
            data: response
        })
    } catch (error) {
        next(error)
    }
}