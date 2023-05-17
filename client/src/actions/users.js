export const signup = (user, navigate) => {
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
   navigate('/chatroom')
  })
 }
}

export const loadLogin = (user, navigate) => {
 return dispatch => {
  fetch('/login', {
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
   navigate('/chatroom')
  })
 }
}

export const loadCurrentUser = (setLoading) => {
 return dispatch => {
  fetch('/me')
  .then((resp) => resp.json())
  .then((data) => {
   console.log(data, "loadCurrentUser action")
   if(data.errors) {
    const action = {
     type: "LOAD_LOGIN_USER",
     payload: data
    }
    dispatch(action);
   }
   setLoading(false);
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
// logout 
export const logoutUser = () => {
 return {
  type: "LOAD_LOGOUT_USER"
 }
}