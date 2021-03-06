// import { SET_TOKEN } from "./actions";

// const initialState = {
//   token: "",
// };
// function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_TOKEN:
//       return { ...state, token: action.payload };
//     default:
//       return state;
//   }
// }
// export default userReducer;

import { SET_USER_NAME, SET_TOKEN, SET_USERDATA, SET_ID ,SET_PROFILE_IMAGE } from "./actions";

const initialState = {
  name: "",
  token: "",
  userData: null,
  id: "",
  profile_image:"",

};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_USERDATA:
      return { ...state, userData: action.payload };
    case SET_ID:
      return { ...state, id: action.payload };
    case SET_PROFILE_IMAGE:
      return { ...state, profile_image: action.payload };   
    default:
      return state;
  }
}

export default userReducer;
