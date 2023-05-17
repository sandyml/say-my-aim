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