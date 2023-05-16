export const signup = (user) => {
 return dispatch => {
  fetch('/signup', {
   method: 'POST',
   headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
   },
   body: JSON.stringify(user)
  })
  .then((resp) => resp.json())
  .then((data) => {
   console.log(data, "users action")
   const action = {
    type: "LOAD_LOGIN_USER",
    payload: data
   }
   dispatch(action);
  })
 }
}

// export const logoutUser = () => {
//  return dispatch => {
//   fetch('/logout', {
//    method: 'DELETE',
//   })
//   const action = {
//    type: "LOAD_LOGOUT_USER"
//   }
//   dispatch(action)
//  }
// }

// no thunk, no payload, no data 
export const logoutUser = () => {
 return {
  type: "LOAD_LOGOUT_USER"
 }
}