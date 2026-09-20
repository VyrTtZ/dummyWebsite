import express from "express";
import { login } from "../updatedStylidasSIGMA GAMIN/backend/controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);

export default router;
