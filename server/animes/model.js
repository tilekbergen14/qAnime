import mongoose from "mongoose"

const commentSchema = mongoose.Schema({
    comment: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    createdAt: {type: Date, default: new Date()}
})

const schema = mongoose.Schema({
    name: {type: String, required: true, trim: true},
    slug: {type: String, required: true, trim: true, unique: true},
    year: {type: Number, default: 0},
    img: String,
    genres: [String],
    createdAt: {type: Date, default: new Date()},
    tags: [String],
    comments: [ commentSchema ],
    rating: [Number],
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    completed: {type: Boolean, default: false},
    description: String
})

const Anime = mongoose.model("Anime", schema)

export default Anime