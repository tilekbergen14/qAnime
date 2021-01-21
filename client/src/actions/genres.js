import * as api from "../Api"

export const getGenres = () => async(dispatch) => {
    const { data } = await api.getGenres()
    dispatch({type: "GET_GENRES", payload: data})
}
