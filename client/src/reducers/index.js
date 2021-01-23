import animes from "./animes"
import characters from "./characters"
import genres from "./genres"
import currentACId from "./currentId"
import auth from "./auth"
import { combineReducers } from "redux"

export default combineReducers({animes, characters, genres, currentACId, auth})