import express from "express";
import { getUsers, addUser } from "../controllers/users.js";

const router = express.Router();

// ROUTES
router.get("/", getUsers);
router.post("/", addUser);

export default router;
