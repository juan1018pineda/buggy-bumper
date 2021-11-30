import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = {
  email: String,
  name: String,
  phone: String,
  from: Date,
  to: Date,
  total: Number,
  idCar: Schema.Types.ObjectId,
};

export const Rentals = mongoose.model("rentals", schema);
