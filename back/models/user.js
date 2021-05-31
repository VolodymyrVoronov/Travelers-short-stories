import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  avatar: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

const user = mongoose.model("User", userSchema);

export default user;
