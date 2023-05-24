export const errorsReducer = (state = [], action) => {
  switch(action.type) {
   case "LOAD_SET_ERRORS":
    return action.payload 
   case "LOAD_CLEAR_ERRORS": 
    return [];
   default:
    return state;
   }
}

export default errorsReducer;