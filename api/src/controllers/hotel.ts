import { Request, Response, NextFunction } from "express";
import { Hotel } from "../models/Hotels";

export const createHotel = async(req: Request, res: Response, next: NextFunction) => {
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel)
    } catch (err) {
      next(err)
    }
}

export async function updateHotel(req: Request, res: Response, next: NextFunction) {
    try {
        const saveHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body as typeof Hotel},
            { new: true}
            )
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(404).json(err)
    }
}

export async function getHotel(req: Request, res: Response, next: NextFunction) {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

export async function getAllHotel(req: Request, res: Response, next: NextFunction) {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}

export async function deleteHotel(req: Request, res: Response, next: NextFunction) {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        next(err)
    }
}
