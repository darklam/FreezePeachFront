import actionTypes from "./actionTypes";

const actions = {};

actions.setToken = token => {
  return {
    type: actionTypes.SET_TOKEN,
    payload: {
      token
    }
  };
};

actions.removeToken = () => {
  return {
    type: actionTypes.REMOVE_TOKEN
  };
};

export default actions;
