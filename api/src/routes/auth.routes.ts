import express from "express";
import { login, register } from "../controllers/auth";
// import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel";

export const authRouter = express.Router();

authRouter.post("/register", register)

authRouter.post("/login", login)
