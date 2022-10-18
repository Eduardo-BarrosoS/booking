import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel";
// import { Error } from "mongoose";
import { Hotel }  from "../models/Hotels";
import { CreateError } from "../utils/Error";

export const hotelRouter = express.Router();

hotelRouter.get("/:id", getHotel)

hotelRouter.get("/", getAllHotel)

hotelRouter.post("/", createHotel)

hotelRouter.put("/:id", updateHotel)

hotelRouter.delete("/:id", deleteHotel)
