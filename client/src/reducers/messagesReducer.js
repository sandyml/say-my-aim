const initialState = [
  {
    id: 1, 
    user: {
      username: "Sandy"
    },
    content: "Hello there!"
  },
  {
    id: 2, 
    user: {
      username: "Ted"
    },
    content: "Hello how are you?!"
  },
]

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ADD_MESSAGE":
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default messagesReducer;