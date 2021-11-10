import mongoose from "mongoose";

const schema = {
  userType: String,
  email: String,
  password: String,
  name: String,
  phone: String,
};

export const Users = mongoose.model("users", schema);
