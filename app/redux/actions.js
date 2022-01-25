// export const SET_TOKEN = "SET_TOKEN";

// export const setToken = (userToken) => (dispatch) => {
//   dispatch({
//     type: SET_TOKEN,
//     payload: userToken,
//   });
// };

export const SET_USER_NAME = "SET_USER_NAME";
export const SET_TOKEN = "SET_TOKEN";
export const SET_USERDATA = "SET_USERDATA";
export const setName = (name) => (dispatch) => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setToken = (usertoken) => (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: usertoken,
  });
};
export const setUserData = (userData) => (dispatch) => {
  dispatch({
    type: SET_USERDATA,
    payload: userData,
  });
};
