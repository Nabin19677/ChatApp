import mongoose from "mongoose";

const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
  },
});

export default mongoose.model("User", User);
