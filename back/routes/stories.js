import express from "express";

import {
  getStories,
  getBestStories,
  writeStory,
  deleteStory,
  likeStory,
} from "./../controllers/stories.js";

import auth from "./../middleware/auth.js";

const router = express.Router();

router.get("/", getStories);
router.get("/bestStories", getBestStories);
router.post("/", auth, writeStory);
router.delete("/:id", auth, deleteStory);
router.patch("/:id/likeStory", auth, likeStory);

export default router;
