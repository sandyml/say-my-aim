// import { headers } from "../Global";

export const loadAllMessages = () => {
 return dispatch => {
  fetch('/messages')
  .then((resp) => resp.json())
  .then((data) => {
   console.log(data, "loadAllMessages")
   dispatch({
    type: "LOAD_ALL_MESSAGES",
    payload: data
   })
  })
 }
}

export const loadAddMessage = (message) => {
 return dispatch => {
  fetch('/messages', {
   method: "POST",
   headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
   },
   body: JSON.stringify(message)
  })
   .then((resp) => resp.json())
   .then((data) => {
    console.log(data, "messages action")
    const action = {
     type: "LOAD_ADD_MESSAGE",
     payload: data
    }
    dispatch(action);
   })
 }
} 

// export const loadAddMessage = (message) => {
//  return {
//   type: "LOAD_ADD_MESSAGE",
//   payload: message
//  }
// }