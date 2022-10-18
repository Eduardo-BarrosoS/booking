import express from "express";

export const roomRouter = express.Router();

roomRouter.get("/", (req, res) => {
    return res.json( { message: "auth endpoit connected"})
})

