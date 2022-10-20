import { NextFunction, Request, Response } from "express";
import { IUser, User }  from "../models/Users";
import bcrypt from "bcryptjs"
import { CreateError } from "../utils/Error";
import jwt from "jsonwebtoken"

export async function register( req: Request, res: Response, next: NextFunction) {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body?.password, salt);

        const newUser = new User<typeof User>(req.body)
        await newUser.save(),
        res.status(200).send("user saved")
        next()
    } catch (err) {
        next(err)
    }
}

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await User.findOne({ username: req.body.username })
        if(!user) return next(CreateError( 404,  "user not found"))

        const isPasswordCorrect = bcrypt.compare(req.body.password, user.password)
        if ( !isPasswordCorrect) return next(CreateError( 400, "password or username is incorrect"))

        const { password, isAdmin, ...otherDetails} = user._doc as IUser

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT as string)
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(otherDetails)
    } catch (err) {
        next(err)
    }
}


