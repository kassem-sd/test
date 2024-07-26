import express from "express";
import { getNames, getIds, createUser } from "../controllers/userControllers.js";
const router = express.Router();

router.post("/", createUser);

router.get("/names", getNames);

router.get("/names/ids", getIds);

export default router;
