import { Router } from "express";
import {getAdmin, addAdmin, unicoAdmin} from "../controllers/adminController.js";


const router = Router();

router.get("/:id", unicoAdmin );
router.get("/", getAdmin );
router.post("/cadastrar-admin",  addAdmin);





export default router;