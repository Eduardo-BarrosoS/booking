import express from "express";
import { register } from "../controllers/auth";
import { IApi } from "../interfaces/api";
import { User } from "../models/Users";
import "dotenv/config";

const authRouter = express.Router();

authRouter.post("/register", register)

export default authRouter