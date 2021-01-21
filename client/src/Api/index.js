import axios from "axios"

const url = "http://localhost:5000/"

export const getAnimes = () => axios.get(`${url}animes/`)
export const createAnime = (anime) => axios.post(`${url}animes/`, anime)
export const deleteAnime = (id) => axios.delete(`${url}animes/${id}`)
export const updateAnime = (anime) => axios.put(`${url}animes/${anime._id}`, anime)

export const getCharacters = () => axios.get(`${url}characters/`)
export const createCharacter = (character) => axios.post(`${url}characters/`, character)
export const deleteCharacter = (id) => axios.delete(`${url}characters/${id}`)
export const updateCharacter = (anime) => axios.put(`${url}characters/${anime._id}`, anime)

export const getGenres = () => axios.get(`${url}genres/`)
