import { Router } from "express";

import { validateJwt } from "../middlewares/validarJWT";

import {
    getestation,
    getestationID,
} from "../controllers/clima";

const router = Router();

router.get("/climaroutes", validateJwt, getestation);
router.get("/climaroutes/:id", validateJwt, getestationID);

export default router;
