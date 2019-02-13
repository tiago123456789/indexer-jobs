import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

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
        required: true
    }
});

userSchema.plugin(passportLocalMongoose, { username: "email" });
export default new mongoose.model("user", userSchema);