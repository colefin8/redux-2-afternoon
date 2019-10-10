import axios from "axios";

const initialState = { email: null, firstName: null, LastName: null };

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

export const requestUserData = () => {
  let userData = axios
    .get("/auth/user-data")
    .then(res => res.data)
    .catch(err => console.log(err));
  return {
    type: REQUEST_USER_DATA,
    payload: userData
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA + "_FULFILLED":
      const { email, firstName, LastName } = action.payload.user;
      return { email, firstName, LastName };
    default:
      return state;
  }
}
