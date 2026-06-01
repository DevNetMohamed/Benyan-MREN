import { Router } from "express";
const router = Router();
import * as authConteroller from "../../controller/authAdmin.controller.js";
import * as Vaildation from "../../Validation/auth/authAdmin.validtion.js";

router.post("login", authConteroller.login);

export default router;
