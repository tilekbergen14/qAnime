import Character from "./models.js"
import mongoose from "mongoose"

export const getCharacters = async (req, res) => {
    const characters = await Character.find()
    res.send(characters)
}
export const createCharacter = async (req, res) => {
    const character = new Character(req.body)
    try{
        const result = await character.save()
        res.status(201).send(result)
    }
    catch(error){
        res.status(409).send("Couldn't create character " + error.message)
    }
}

export const updateCharacter = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("Inavlid id!")
    try{
        const character = await Character.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!character) return res.status(400).send("Couldn't find character!")
        res.send(character)
    }
    catch(err){
        console.log(err.message)
    }
}

export const deleteCharacter = (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send("Inavlid id!")
    Character.findByIdAndDelete(req.params.id)
        .then(result => res.send(result))
        .catch(err => console.log(err))
}