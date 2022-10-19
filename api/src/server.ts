import express, { ErrorRequestHandler } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { authRouter }  from "./routes/auth.routes"
import {hotelRouter} from "./routes/hotels.routes"
import { roomRouter } from "./routes/rooms.routes"
import { userRouter } from "./routes/users.routes"
import { Hotel } from "./models/Hotels"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()

async function connection() {
    const url = process.env.MONGO as string
    try {
        await mongoose.connect(url)
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("connected")
})

app.use(express.json())


app.use(cookieParser())


app.use("/auth", authRouter)
app.use("/hotel", hotelRouter)
app.use("/rooms", roomRouter)
app.use("/user", userRouter)

app.use(((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Sorry not found"
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
}) as ErrorRequestHandler)
    
app.listen(8000, () => {
    connection()
    console.log("first connection")
})