import mongoose from "mongoose"

const User = mongoose.model("User", mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    admin: {type: Boolean, default: false}
}))

export default User

