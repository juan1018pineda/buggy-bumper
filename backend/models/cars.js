import mongoose from "mongoose";

const schema = {
  carType: String,
  doors: String,
  seats: String,
  bags: String,
  price: Number,
  image: String,
};

export const Cars = mongoose.model("cars", schema);
