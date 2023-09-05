import mongoose from "mongoose";

const PassSchema = new mongoose.Schema({
  Opponent: { type: String, required: true},
  guest: { type: Boolean, required: true },
  year: { type: String, required: true },
  quantity : {type: Number, required: true},
  price : {type: Number, required: true},
  phoneNumber: {type: String, required: true},
  userId: {type: String, required: true}
});

export const PassModel = mongoose.model("pass", PassSchema);