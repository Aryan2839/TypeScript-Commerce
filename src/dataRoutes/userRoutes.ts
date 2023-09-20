import dotenv from "dotenv";

dotenv.config({path:".././env"});
import cors from "cors"
import express, { Router } from "express";
const router: Router = express.Router();
import {AuthenticationOfData} from "../controlData/control.js";
import userAuth from "../middleware/auth.js";

router.use(express.json());
router.use(cors());


// router level middleware - to protect route
router.use("/ChangePassword",userAuth);
router.use("/userData",userAuth);



//public route

router.post("/Register", AuthenticationOfData.userRegistration);
router.post("/Login", AuthenticationOfData.userLogin);


//protected route
router.post("/ChangePassword", AuthenticationOfData.changePassword);  //for this we've to create a middleware
router.get("/userData", AuthenticationOfData.getUserData);  



export default router;