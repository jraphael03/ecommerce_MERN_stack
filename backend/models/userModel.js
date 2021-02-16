import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true, // Creates created at and updated at for records
  }
);

const User = mongoose.model("User", userSchema);            //set model name then schema
export default User;
