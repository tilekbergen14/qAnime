const currentACId = (currentACId = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_ANIME_ID":
            return action.payload
        case "DELETE_CURRENT_ANIME_ID":
            return currentACId = null
        case "SET_CURRENT_CHARACTER_ID":
            return action.payload
        case "DELETE_CURRENT_CHARACTER_ID":
            return currentACId = null
        default:
            return currentACId
    }
}

export default currentACId