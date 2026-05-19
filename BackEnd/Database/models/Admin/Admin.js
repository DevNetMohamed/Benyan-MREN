import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

export const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Password is Required"],
    },
    password: {
      type: String,
      minlength: [6, "Password must be 6 char"],
    },
  },
  {
    timeseries: true,
  },
);

// Hooks
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(
    this.password,
    parseInt(process.env.SALT_ROUNDS),
  );
});

adminSchema.methods.comparePassword = async function (matchedPassword) {
  return await bcrypt.compare(matchedPassword, this.password);
};

export const adminModel = mongoose.model("Admin", adminSchema);
