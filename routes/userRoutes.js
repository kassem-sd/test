import express from "express";
import { getNames, getIds, createUser } from "../controllers/userControllers.js";
import { firstMid } from "../middlewares/firstMid.js";
const router = express.Router();

router.post("/",firstMid, createUser);

router.get("/names", getNames);

router.get("/names/ids", getIds);

export default router;
