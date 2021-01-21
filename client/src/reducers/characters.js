const characters = (characters = [], action) => {
    switch (action.type) {
        case "GET_CHARACTERS":
            return characters = action.payload
        case "CREATE_CHARACTER":
            return [...characters, action.payload]
        case "DELETE_CHARACTER":
            return characters.filter(character => character._id !== action.payload._id)
        case "UPDATE_CHARACTER":
            return characters.map(character => character._id === action.payload._id ? action.payload : character)
        default:
            return characters
    }
}

export default characters