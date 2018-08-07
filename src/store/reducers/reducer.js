import actionTypes from "../actions/actionTypes";

const initialState = {
  token: false,
  userInfo: {
    username: false,
    firstName: false,
    lastName: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token
      };
    case actionTypes.REMOVE_TOKEN:
      return {
        ...state,
        token: false
      };
    default:
      return state;
  }
};

export default reducer;
