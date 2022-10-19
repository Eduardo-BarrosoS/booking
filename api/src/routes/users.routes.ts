import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user";
import { verifyToken, verifyUser } from "../utils/verifyToken";


export const userRouter = express.Router();

userRouter.get("/checkauthentication", verifyToken, ( req ,res ,next ) => {
    res.send("Hello user, user logged in!")
})

userRouter.get("/checkuser/:id", verifyUser, ( req ,res ,next ) => {
    res.send("Hello user, user logged in and you can delete your account!")
})

userRouter.get("/:id", getUser)

userRouter.get("/", getAllUser)

userRouter.put("/:id", updateUser)

userRouter.delete("/:id", deleteUser)
