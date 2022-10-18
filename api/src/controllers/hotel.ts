import { Request, Response, NextFunction } from "express";
import { IApi } from "../interfaces/api";
import { Hotel } from "../models/Hotels";

export const createHotel = async({req, res, next}: IApi) => {
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(404).json(err)
    }
}
export async function updateHotel({req, res, next}: IApi) {
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
export async function getHotel({req, res, next}: IApi) {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    } catch (err) {
        res.status(404).json(err)
    }
}
export async function getAllHotel({req, res, next}: IApi) {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}
export async function deleteHotel({req, res, next}: IApi) {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        res.status(404).json(err)
    }
}
