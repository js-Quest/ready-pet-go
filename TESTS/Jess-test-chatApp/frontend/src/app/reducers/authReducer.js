import { authActions } from '../actions/authActions'

const initState = {
  userDetails: null
}

const reducer = (state = initState, action) => {
  switch (action.type){
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        //from setUserDetails in authActions
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;