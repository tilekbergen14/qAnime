import express from "express"
import { getCharacters, createCharacter, updateCharacter, deleteCharacter } from "./controllers.js"
const router = express.Router()

router.get("/", getCharacters)
router.post("/", createCharacter)
router.put("/:id", updateCharacter)
router.delete("/:id", deleteCharacter)

export default router