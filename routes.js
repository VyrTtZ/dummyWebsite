import express from "express";
import { login } from "../dummyWebsite/backend/controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);

export default router;
