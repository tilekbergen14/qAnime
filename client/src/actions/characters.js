import * as api from "../Api"

export const getCharacters = () => async(dispatch) => {
    const { data } = await api.getCharacters()
    dispatch({type: "GET_CHARACTERS", payload: data})
}

export const createCharacter = (character) => async(dispatch) => {
    try{
        const { data } = await api.createCharacter(character)
        dispatch({type: "CREATE_CHARACTER", payload: data})
    }
    catch(err){
        console.log(err.message)
    }
}

export const deleteCharacter = (id) => async(dispatch) => {
    try{
        const { data } = await api.deleteCharacter(id)
        dispatch({type: "DELETE_CHARACTER", payload: data})
    }
    catch(err){
        console.log(err.message)
    }
}

export const updateCharacter = (character) => async(dispatch) => {
    try{
        const { data } = await api.updateCharacter(character)
        dispatch({type: "UPDATE_CHARACTER", payload: data})
    }
    catch(err){
        console.log(err.message)
    }
}