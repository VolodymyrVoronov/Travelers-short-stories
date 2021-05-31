import mongoose from "mongoose";

import StoryMessage from "./../models/storyMessage.js";

export const getStories = async (req, res) => {
  try {
    const storyMessages = await StoryMessage.find();

    res.status(200).json(storyMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBestStories = async (req, res) => {
  try {
    const storyMessages = await StoryMessage.find();
    storyMessages.sort(
      (a, b) => Number(a.likes.length) - Number(b.likes.length)
    );

    res.status(200).json(storyMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const writeStory = async (req, res) => {
  const post = req.body;

  const newStory = new StoryMessage({ ...post, creator: req.userId });

  try {
    await newStory.save();

    res.status(201).json(newStory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteStory = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`No story with that id`);
  }

  await StoryMessage.findByIdAndRemove(_id);

  res.json({ message: `Story deleted successfully` });
};

export const likeStory = async (req, res) => {
  const { id: _id } = req.params;

  if (!req.userId) {
    return res.json({ message: `Unauthenticated` });
  }

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send(`No story with that id`);
  }

  const story = await StoryMessage.findById(_id);

  const index = story.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    story.likes.push(req.userId);
  } else {
    story.likes = story.likes.filter((id) => id !== String(req.userId));
  }

  const updatedStory = await StoryMessage.findByIdAndUpdate(_id, story, {
    new: true,
  });

  res.json(updatedStory);
};
