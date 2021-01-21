import * as api from "../Api"

export const getAnimes = () => async(dispatch) => {
    const { data } = await api.getAnimes()
    dispatch({type: "GET_ANIMES", payload: data})
}

export const createAnime = (anime) => async(dispatch) => {
    try{
        const { data } = await api.createAnime(anime)
        dispatch({type: "CREATE_ANIME", payload: data})
    }
    catch(err){
        console.log(err.body)
    }
}

export const deleteAnime = (id) => async(dispatch) => {
    try{
        const { data } = await api.deleteAnime(id)
        dispatch({type: "DELETE_ANIME", payload: data})
    }
    catch(err){
        console.log(err.body)
    }
}

export const updateAnime = (anime) => async(dispatch) => {
    try{
        const { data } = await api.updateAnime(anime)
        dispatch({type: "UPDATE_ANIME", payload: data})
    }
    catch(err){
        console.log(err.body)
    }
}