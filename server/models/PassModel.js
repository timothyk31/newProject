import mongoose from "mongoose";

const PassSchema = new mongoose.Schema({
  Opponent: { type: String, required: true},
  guest: { type: Boolean, required: true },
  type: { type: Number, required: true },
  quantity : {type: Number, required: true},
  price : {type: Number, required: true}
});

export const PassModel = mongoose.model("pass", PassSchema);