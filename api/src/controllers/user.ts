import { Request, Response, NextFunction } from "express";
import { User } from "../models/Users";

export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try {
        const saveUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body as typeof User},
            { new: true}
            )
        res.status(200).json(saveUser)
    } catch (err) {
        res.status(404).json(err)
    }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export async function getAllUser(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (err) {
        next(err)
    }
}
