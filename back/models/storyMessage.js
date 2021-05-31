import mongoose from "mongoose";

const storySchema = mongoose.Schema({
  author: String,
  storyTitle: String,
  storyText: String,
  storyTags: [String],
  storyPhoto: String,
  creator: String,
  likes: {
    type: [String],
    default: [],
  },
});

const StoryMessage = mongoose.model("StoryMessage", storySchema);

export default StoryMessage;
