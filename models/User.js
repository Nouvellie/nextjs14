import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        maxLength: [50, "Name can not be more than 50 characters."],
        minLength: 1,
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        index: true,
        lowercase: true,
        unique: true,
        trim: true,
        minLength: 5,
        maxLength: [20, "Email can not be more than 20 characters."],
    },
    password: String,
    role: {
        type: String,
        default: "user", // admin.
    },
    image: String,
    resetCode: {
        data: String,
        expiresAt: {
            type: Date,
            default: () => new Date(Date.now() + 10*60*1000), // 10 minutes.
        } 
    },
    }, 
    {timestamps: true}
);

userSchema.plugin(uniqueValidator);

export default mongoose.models.User || mongoose.model("User", userSchema);