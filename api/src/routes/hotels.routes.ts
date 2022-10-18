import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel } from "../controllers/hotel";
// import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel";
import { IApi } from "../interfaces/api";
// import { Error } from "mongoose";
import { Hotel }  from "../models/Hotels";
import { CreateError } from "../utils/Error";

export const hotelRouter = express.Router();


hotelRouter.post("/", async (req,res,next) => {
    const newTry = new Hotel(req.body)
    try {
        const newHotel = await newTry.save()  
        res.status(200).json(newHotel)      
    } catch (err) {
        res.status(404).json(err)
    }
})



hotelRouter.get("/:id", getHotel)

hotelRouter.get("/", getAllHotel)

hotelRouter.post("/", createHotel)

// hotelRouter.put("/:id", async (req, res, next) => {
//     try {
//         const saveHotel = await Hotel.findByIdAndUpdate(
//             req.params.id, 
//             { $set: req.body as typeof Hotel},
//             { new: true}
//             )
//         res.status(200).json(saveHotel)
//     } catch (err) {
//         res.status(404).json(err)
//     }
// })

hotelRouter.delete("/:id", deleteHotel)
