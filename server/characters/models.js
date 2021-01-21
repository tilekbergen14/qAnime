import mongoose from "mongoose"

const Character = mongoose.model("Character", mongoose.Schema({
    name: String,
    favorites: Number,
    anime: String,
    description: String,
    img: String
}))

export default Character