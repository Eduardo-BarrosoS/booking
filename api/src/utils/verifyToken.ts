import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { CreateError } from "./Error";

    export function verifyToken(req: Request, res: Response, next: NextFunction, verifyUser: any){
        const token = req.cookies.access_token
        if(!token) return next(CreateError(401, "You ar not authenticated!"))

        jwt.verify(token, process.env.JWT as string, (err: any, user: any) => {
            if(err) return next(CreateError(403, "Token is not valid!"))
            req.user = user
            next()
        })
    }

    export function verifyUser(req: Request, res: Response, next: NextFunction){
        verifyToken( req, res, next, (req: Request, res: Response) => {
            if(req.user.id == req,params.is || req.user.isAdmin) next()
            else return next(CreateError(403, "You are not authorized!"))
        })
    }