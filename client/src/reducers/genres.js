const genres = (genres = [], action) => {
    switch (action.type) {
        case "GET_GENRES":
            return genres = action.payload
        default:
            return genres
    }
}

export default genres