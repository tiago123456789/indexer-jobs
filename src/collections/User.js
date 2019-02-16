import mongoose from "mongoose";
import bcrypt from "bcrypt";
import CONSTANTES from "../config/Constantes";

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
        set: function(value) {
            return bcrypt.hashSync(value, CONSTANTES.SALT_ROUND);
        }
    }
});

export default new mongoose.model("user", userSchema);