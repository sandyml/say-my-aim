import { setErrors, clearErrors } from './errors';
import { headers } from '../Global';

export const signup = (user, navigate) => {
 return dispatch => {
  fetch('/signup', {
   method: 'POST',
   headers,
   body: JSON.stringify(user)
  })
  .then((resp) => resp.json())
  .then((data) => {
   console.log(data, "users action")
   dispatch({
    type: "LOAD_LOGIN_USER",
    payload: data
   });
   navigate('/chatroom')
  })
 }
}

// export const loadLogin = (user, navigate) => {
//  return dispatch => {
//   fetch('/login', {
//    method: 'POST',
//    headers,
//    body: JSON.stringify(user)
//   })
//   .then((resp) => resp.json())
//   .then((data) => {
//    console.log(data, "users action")
//    const action = {
//     type: "LOAD_LOGIN_USER",
//     payload: data
//    }
//    dispatch(action);
//    navigate('/chatroom')
//   })
//  }
// }

export const loadLogin = (username, password, navigate) => {
 return dispatch => {
   // setLoading(true);
   fetch('/login', {
     method: 'POST',
   headers,
     body: JSON.stringify({
       username,
       password,
     }),
   }).then((resp) => {
     if (resp.ok) {
       resp.json().then((user) => {
         const action = {
           type: "LOAD_LOGIN_USER",
           payload: user
         }
         dispatch(action);
         dispatch(clearErrors())
         navigate('/')
       });
     } else {
       resp.json()
         .then((err) => {
           dispatch(setErrors(err.errors))
         })
     }
   });
 }
}

export const loadCurrentUser = (setLoading) => {
 return dispatch => {
  fetch('/me')
  .then((resp) => resp.json())
  .then((data) => {
   console.log(data, "loadCurrentUser action")
   if(!data.errors) {
    dispatch({
      type: "LOAD_LOGIN_USER",
      payload: data
     });
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