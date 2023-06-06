import * as api from '../../api';
import { openAlertMessage } from './alertActions';
const authActions = { 
  //action type
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
};

const getActions = (dispatch) => {

  const login = async (userDetails) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      // handle error
      dispatch(openAlertMessage(response?.exception?.response?.data?.message));
    } else {
      const { userDetails } = response?.data;
      // localStorage.setItem('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      window.location.replace('/dashboard');
    }
  };

  const register = async (userDetails) => {
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      console.log('email or username already exists')
      // handle error
      dispatch(openAlertMessage(response?.exception?.response?.data?.message));
    } else {
      const { userDetails } = response?.data;
      // localStorage.setItem('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      window.location.replace('/dashboard');
    }
  };

  return {
    login,
    register
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails
  };
};

export { authActions, getActions };
