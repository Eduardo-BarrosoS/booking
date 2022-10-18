import express from "express";
import { register } from "../controllers/auth";
import { IApi } from "../interfaces/api";
import { User } from "../models/Users";
import "dotenv/config";
export const authRouter = express.Router();

authRouter.post("/register", async ({ req, res, next}: IApi) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        await newUser.save(),
        res.status(200).json(newUser)
    } catch (err) {
        next(err)
    }
})