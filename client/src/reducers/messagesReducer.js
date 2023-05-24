const initialState = []

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ALL_MESSAGES":
      return action.payload
    case "LOAD_ADD_MESSAGE":
      return [...state, action.payload]
    default:
      return state;
  }
}

export default messagesReducer;