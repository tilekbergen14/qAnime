import mongoose from "mongoose"

const Genre = mongoose.model("Genre", mongoose.Schema({
    name: {type: String, required: true}
}))

export default Genre