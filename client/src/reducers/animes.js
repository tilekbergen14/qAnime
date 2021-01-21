const animes = (animes = [], action) => {
    switch (action.type) {
        case "GET_ANIMES":
            return animes = action.payload
        case "CREATE_ANIME":
            return [...animes, action.payload]
        case "DELETE_ANIME":
            return animes.filter(anime => anime._id !== action.payload._id)
        case "UPDATE_ANIME":
            return animes.map(anime => anime._id !== action.payload._id ? anime : action.payload)
        default:
            return animes
    }
}

export default animes