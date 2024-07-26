import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {type: String, required: true},
    userpass: {type:Number, required: true}
});

// export const User=model('User', userSchema);

export default model('User', userSchema);