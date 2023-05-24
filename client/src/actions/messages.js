export const loadAllMessages = () => {
  return dispatch => {
    fetch("/messages")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "loadAllMessages")
        dispatch({
          type: "LOAD_ALL_MESSAGES",
          payload: data
        });
      })
  }
}

// Returning object only no need to fetch 
 export const loadAddMessage = (message) => {
  return {
    type: "LOAD_ADD_MESSAGE",
    payload: message
  }
}