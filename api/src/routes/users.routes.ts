import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    return res.json( { message: "auth endpoit connected"})
})
