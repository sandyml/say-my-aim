const initialState = {
  user: null,
  loggedIn: false,
  // messages: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_LOGIN_USER":
      return {
        user: action.payload,
        loggedIn: true
      }
    case "LOAD_SIGNUP_USER":
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }
    case "LOAD_LOGOUT_USER":
      return initialState;
      // return {
      //   ...state,
      //   user: null,
      //   loggedIn: false
      // }
    default:
      return state;
  }
}

export default usersReducer;