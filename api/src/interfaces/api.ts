import { NextFunction, Request, Response } from "express";

export interface IApi {
    req:  Request,
    res: Response,
    next: NextFunction,
}
