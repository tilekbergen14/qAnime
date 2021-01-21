import Anime from "./model.js"
import mongoose from "mongoose"

export const getAnimes = async (req, res) => {
    const animes = await Anime.find().sort("-createdAt")
    res.json(animes)
}

export const createAnime = async (req, res) => {
    const anime = new Anime(req.body)
    try{
        const result = await anime.save()
        res.status(201).send(result)
    }
    catch(error){
        res.status(409).json("Couldn't create anime " + error.message)
    }
}

export const updateAnime = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("Inavlid id!")
    try{
        const anime = await Anime.findByIdAndUpdate(req.params.id, req.body,{new: true})
        if(!anime) return res.status(400).send("Couldn't find anime!")
        res.send(anime)
    }
    catch(err){
        console.log(err.message)
    }
}

export const deleteAnime = (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("Inavlid id!")
    Anime.findByIdAndDelete(req.params.id)
        .then(result => res.send(result))
        .catch(err => console.log(err))
}