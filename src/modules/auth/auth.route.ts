import { Router } from "express";
import { registerController } from "./auth.controller.js";

const route = Router()

route.post("/register", registerController)


export default route