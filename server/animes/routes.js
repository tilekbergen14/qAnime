import express from "express"
import { getAnimes, createAnime, updateAnime, deleteAnime } from "./controllers.js"
const router = express.Router()

router.get("/", getAnimes)
router.post("/", createAnime)
router.put("/:id", updateAnime)
router.delete("/:id", deleteAnime)

export default router