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
export const SET_ID = "SET_ID";
export const SET_PROFILE_IMAGE = "SET_PROFILE_IMAGE";

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
export const setId = (id) => (dispatch) => {
  dispatch({
    type: SET_ID,
    payload: id,
  });
};


export const setProfile_image = (profile_image) => (dispatch) => {
  dispatch({
    type: SET_PROFILE_IMAGE,
    payload: profile_image,
  });
};
