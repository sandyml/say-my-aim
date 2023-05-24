export const setErrors = (errors) => {
 return {
  type: "LOAD_SET_ERRORS",
  payload: errors
 }
};

export const clearErrors = () => {
 return {
  type: "LOAD_CLEAR_ERRORS"
 }
};