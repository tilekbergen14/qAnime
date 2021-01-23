import React, { useEffect } from 'react'
import {BrowserRouter , Switch, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Homepage from "./components/homepage"
import Admin from "./components/admin"
import { useDispatch } from "react-redux"
import { getAnimes } from "./actions/animes"
import { getCharacters } from "./actions/characters"
import CreateAnime from "./components/Forms/CreateAnime"
import PageNotFound from "./components/PageNotFound"
import { getGenres } from "./actions/genres"
import CreateCharacter from "./components/Forms/CreateCharacter"
import Animes from "./components/animes/Animes"
import Anime from "./components/animes/Anime"
import Characters from "./components/characters/Characters"
import Auth from "./components/Forms/Auth"

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAnimes())
        dispatch(getCharacters())
        dispatch(getGenres())
    }, [dispatch]);
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/admin/" exact component={Admin}/>
                    <Route path="/createanime/" exact component={CreateAnime}/>
                    <Route path="/createcharacter/" exact component={CreateCharacter}/>
                    <Route path="/animes/" exact component={Animes}/>
                    <Route path="/animes/:id" exact component={Anime}/>
                    <Route path="/characters/" exact component={Characters}/>
                    <Route path="/auth/" exact component={Auth}/>
                    <Route path="/" component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
