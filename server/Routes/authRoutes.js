import express from "express"
import controllers from "../controllers/authControllers.js";
import validateToken from "../middleware/validateToken.js";

const router=express.Router();


// @public route
// post route
// register route

router.post("/register",controllers.register)

router.post("/login",controllers.login)

router.get("/logout",controllers.logout)

router.get("/is-auth",validateToken,controllers.isAuthenticated)

router.get("/send-email",validateToken,controllers.sendEmailOtp)

router.post("/verify-email",validateToken,controllers.verifyEmailOtp)


export default router;