import animes from "./animes"
import characters from "./characters"
import genres from "./genres"
import currentACId from "./currentId"
import { combineReducers } from "redux"

export default combineReducers({animes, characters, genres, currentACId})