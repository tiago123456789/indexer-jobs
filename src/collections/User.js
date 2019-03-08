import mongoose from "mongoose";
import bcrypt from "bcrypt";
import hashPassword from "./middlewares/HashPassword";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cellphone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre("save", hashPassword);
userSchema.pre("update", hashPassword);

export default new mongoose.model("user", userSchema);