import Genre from "./models.js"
import mongoose from "mongoose"

export const getGenres = async (req, res) => {
    const genres = await Genre.find()
    res.send(genres)
}
export const createGenre = async (req, res) => {
    const genre = new Genre(req.body)
    try{
        const result = await genre.save()
        res.status(201).send(result)
    }
    catch(error){
        res.status(409).send("Couldn't create Genre " + error.message)
    }
}

export const updateGenre = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("Inavlid id!")
    try{
        const genre = await Genre.findByIdAndUpdate(req.params.id, req.body)
        if(!genre) return res.status(400).send("Couldn't find Genre!")
        res.send(genre)
    }
    catch(err){
        console.log(err.message)
    }
}

export const deleteGenre = (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("Inavlid id!")
    Genre.findByIdAndDelete(req.params.id)
        .then(result => res.send(result))
        .catch(err => console.log(err))
}