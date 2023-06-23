import { Router } from "express";
import Event from "./event.routes"

const router = Router();

// rutas del usuario
router.use("/event", Event);
// rutas de los productos

export default router;
