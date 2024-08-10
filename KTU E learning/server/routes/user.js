import express from "express";
import { 
    loginUser, 
    myProfile, 
    register, 
    verifyUser, 
}   from "../controllers/userr.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/userr/register", register);
router.post("/userr/verify", verifyUser);
router.post("/userr/login", loginUser);
router.get("/userr/me", isAuth, myProfile);


export default router;