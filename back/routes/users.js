import express from "express";

import { login, registration, getAuthors } from "./../controllers/users.js";

const router = express.Router();

router.post("/login", login);
router.post("/registration", registration);
router.get("/authors", getAuthors);

export default router;
